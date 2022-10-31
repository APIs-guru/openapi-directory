package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateClassifierXAmzTargetEnum string

const (
	UpdateClassifierXAmzTargetEnumAwsGlueUpdateClassifier UpdateClassifierXAmzTargetEnum = "AWSGlue.UpdateClassifier"
)

type UpdateClassifierHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateClassifierXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateClassifierRequest struct {
	Headers UpdateClassifierHeaders
	Request shared.UpdateClassifierRequest `request:"mediaType=application/json"`
}

type UpdateClassifierResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
	UpdateClassifierResponse  map[string]interface{}
	VersionMismatchException  *interface{}
}
