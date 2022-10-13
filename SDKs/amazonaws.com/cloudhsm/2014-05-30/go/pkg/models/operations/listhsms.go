package operations

import (
	"openapi/pkg/models/shared"
)

type ListHsmsXAmzTargetEnum string

const (
	ListHsmsXAmzTargetEnumCloudHsmFrontendServiceListHsms ListHsmsXAmzTargetEnum = "CloudHsmFrontendService.ListHsms"
)

type ListHsmsHeaders struct {
	XAmzAlgorithm     *string                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListHsmsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListHsmsRequest struct {
	Headers ListHsmsHeaders
	Request shared.ListHsmsRequest `request:"mediaType=application/json"`
}

type ListHsmsResponse struct {
	CloudHsmInternalException *interface{}
	CloudHsmServiceException  *interface{}
	ContentType               string
	InvalidRequestException   *interface{}
	ListHsmsResponse          *shared.ListHsmsResponse
	StatusCode                int64
}
