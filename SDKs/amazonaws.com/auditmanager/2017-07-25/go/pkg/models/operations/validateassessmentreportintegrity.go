package operations

import (
	"openapi/pkg/models/shared"
)

type ValidateAssessmentReportIntegrityHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ValidateAssessmentReportIntegrityRequestBody struct {
	S3RelativePath string `json:"s3RelativePath"`
}

type ValidateAssessmentReportIntegrityRequest struct {
	Headers ValidateAssessmentReportIntegrityHeaders
	Request ValidateAssessmentReportIntegrityRequestBody `request:"mediaType=application/json"`
}

type ValidateAssessmentReportIntegrityResponse struct {
	AccessDeniedException                     *interface{}
	ContentType                               string
	InternalServerException                   *interface{}
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
	ValidateAssessmentReportIntegrityResponse *shared.ValidateAssessmentReportIntegrityResponse
	ValidationException                       *interface{}
}
