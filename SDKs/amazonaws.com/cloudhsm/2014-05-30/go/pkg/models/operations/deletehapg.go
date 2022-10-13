package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteHapgXAmzTargetEnum string

const (
	DeleteHapgXAmzTargetEnumCloudHsmFrontendServiceDeleteHapg DeleteHapgXAmzTargetEnum = "CloudHsmFrontendService.DeleteHapg"
)

type DeleteHapgHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteHapgXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteHapgRequest struct {
	Headers DeleteHapgHeaders
	Request shared.DeleteHapgRequest `request:"mediaType=application/json"`
}

type DeleteHapgResponse struct {
	CloudHsmInternalException *interface{}
	CloudHsmServiceException  *interface{}
	ContentType               string
	DeleteHapgResponse        *shared.DeleteHapgResponse
	InvalidRequestException   *interface{}
	StatusCode                int64
}
