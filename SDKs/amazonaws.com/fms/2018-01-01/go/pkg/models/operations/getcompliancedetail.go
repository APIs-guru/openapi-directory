package operations

import (
	"openapi/pkg/models/shared"
)

type GetComplianceDetailXAmzTargetEnum string

const (
	GetComplianceDetailXAmzTargetEnumAwsfms20180101GetComplianceDetail GetComplianceDetailXAmzTargetEnum = "AWSFMS_20180101.GetComplianceDetail"
)

type GetComplianceDetailHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetComplianceDetailXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetComplianceDetailRequest struct {
	Headers GetComplianceDetailHeaders
	Request shared.GetComplianceDetailRequest `request:"mediaType=application/json"`
}

type GetComplianceDetailResponse struct {
	ContentType                 string
	GetComplianceDetailResponse *shared.GetComplianceDetailResponse
	InternalErrorException      *interface{}
	InvalidInputException       *interface{}
	InvalidOperationException   *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}
