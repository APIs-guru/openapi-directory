package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyLunaClientXAmzTargetEnum string

const (
	ModifyLunaClientXAmzTargetEnumCloudHsmFrontendServiceModifyLunaClient ModifyLunaClientXAmzTargetEnum = "CloudHsmFrontendService.ModifyLunaClient"
)

type ModifyLunaClientHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyLunaClientXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyLunaClientRequest struct {
	Headers ModifyLunaClientHeaders
	Request shared.ModifyLunaClientRequest `request:"mediaType=application/json"`
}

type ModifyLunaClientResponse struct {
	CloudHsmServiceException *interface{}
	ContentType              string
	ModifyLunaClientResponse *shared.ModifyLunaClientResponse
	StatusCode               int64
}
