package operations

import (
	"openapi/pkg/models/shared"
)

type ListHapgsXAmzTargetEnum string

const (
	ListHapgsXAmzTargetEnumCloudHsmFrontendServiceListHapgs ListHapgsXAmzTargetEnum = "CloudHsmFrontendService.ListHapgs"
)

type ListHapgsHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListHapgsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListHapgsRequest struct {
	Headers ListHapgsHeaders
	Request shared.ListHapgsRequest `request:"mediaType=application/json"`
}

type ListHapgsResponse struct {
	CloudHsmInternalException *interface{}
	CloudHsmServiceException  *interface{}
	ContentType               string
	InvalidRequestException   *interface{}
	ListHapgsResponse         *shared.ListHapgsResponse
	StatusCode                int64
}
