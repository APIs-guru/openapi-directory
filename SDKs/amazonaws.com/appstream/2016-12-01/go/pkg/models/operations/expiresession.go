package operations

import (
	"openapi/pkg/models/shared"
)

type ExpireSessionXAmzTargetEnum string

const (
	ExpireSessionXAmzTargetEnumPhotonAdminProxyServiceExpireSession ExpireSessionXAmzTargetEnum = "PhotonAdminProxyService.ExpireSession"
)

type ExpireSessionHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ExpireSessionXAmzTargetEnum `header:"name=X-Amz-Target"`
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
