package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchemaXAmzTargetEnum string

const (
	GetSchemaXAmzTargetEnumAwsGlueGetSchema GetSchemaXAmzTargetEnum = "AWSGlue.GetSchema"
)

type GetSchemaHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSchemaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetSchemaRequest struct {
	Headers GetSchemaHeaders
	Request shared.GetSchemaInput `request:"mediaType=application/json"`
}

type GetSchemaResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	EntityNotFoundException  *interface{}
	GetSchemaResponse        *shared.GetSchemaResponse
	InternalServiceException *interface{}
	InvalidInputException    *interface{}
	StatusCode               int64
}
