package operations

import (
	"openapi/pkg/models/shared"
)

type EnableUserXAmzTargetEnum string

const (
	EnableUserXAmzTargetEnumPhotonAdminProxyServiceEnableUser EnableUserXAmzTargetEnum = "PhotonAdminProxyService.EnableUser"
)

type EnableUserHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableUserXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type EnableUserRequest struct {
	Headers EnableUserHeaders
	Request shared.EnableUserRequest `request:"mediaType=application/json"`
}

type EnableUserResponse struct {
	ContentType                   string
	EnableUserResult              map[string]interface{}
	InvalidAccountStatusException *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
