package operations

import (
	"openapi/pkg/models/shared"
)

type GetBlueprintRunXAmzTargetEnum string

const (
	GetBlueprintRunXAmzTargetEnumAwsGlueGetBlueprintRun GetBlueprintRunXAmzTargetEnum = "AWSGlue.GetBlueprintRun"
)

type GetBlueprintRunHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetBlueprintRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetBlueprintRunRequest struct {
	Headers GetBlueprintRunHeaders
	Request shared.GetBlueprintRunRequest `request:"mediaType=application/json"`
}

type GetBlueprintRunResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetBlueprintRunResponse   *shared.GetBlueprintRunResponse
	InternalServiceException  *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
