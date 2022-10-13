package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyHapgXAmzTargetEnum string

const (
	ModifyHapgXAmzTargetEnumCloudHsmFrontendServiceModifyHapg ModifyHapgXAmzTargetEnum = "CloudHsmFrontendService.ModifyHapg"
)

type ModifyHapgHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyHapgXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyHapgRequest struct {
	Headers ModifyHapgHeaders
	Request shared.ModifyHapgRequest `request:"mediaType=application/json"`
}

type ModifyHapgResponse struct {
	CloudHsmInternalException *interface{}
	CloudHsmServiceException  *interface{}
	ContentType               string
	InvalidRequestException   *interface{}
	ModifyHapgResponse        *shared.ModifyHapgResponse
	StatusCode                int64
}
