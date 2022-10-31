package operations

import (
	"openapi/pkg/models/shared"
)

type ExpireSessionXAmzTargetEnum string

const (
	ExpireSessionXAmzTargetEnumPhotonAdminProxyServiceExpireSession ExpireSessionXAmzTargetEnum = "PhotonAdminProxyService.ExpireSession"
)

type ExpireSessionHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ExpireSessionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ExpireSessionRequest struct {
	Headers ExpireSessionHeaders
	Request shared.ExpireSessionRequest `request:"mediaType=application/json"`
}

type ExpireSessionResponse struct {
	ContentType         string
	ExpireSessionResult map[string]interface{}
	StatusCode          int64
}
