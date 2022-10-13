package operations

import (
	"openapi/pkg/models/shared"
)

type ListSamplesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListSamplesXAmzTargetEnum string

const (
	ListSamplesXAmzTargetEnumDeviceFarm20150623ListSamples ListSamplesXAmzTargetEnum = "DeviceFarm_20150623.ListSamples"
)

type ListSamplesHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSamplesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListSamplesRequest struct {
	QueryParams ListSamplesQueryParams
	Headers     ListSamplesHeaders
	Request     shared.ListSamplesRequest `request:"mediaType=application/json"`
}

type ListSamplesResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	ListSamplesResult       *shared.ListSamplesResult
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
