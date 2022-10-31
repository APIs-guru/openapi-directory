package operations

import (
	"openapi/pkg/models/shared"
)

type PutAppsListXAmzTargetEnum string

const (
	PutAppsListXAmzTargetEnumAwsfms20180101PutAppsList PutAppsListXAmzTargetEnum = "AWSFMS_20180101.PutAppsList"
)

type PutAppsListHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAppsListXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutAppsListRequest struct {
	Headers PutAppsListHeaders
	Request shared.PutAppsListRequest `request:"mediaType=application/json"`
}

type PutAppsListResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidInputException     *interface{}
	InvalidOperationException *interface{}
	LimitExceededException    *interface{}
	PutAppsListResponse       *shared.PutAppsListResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
