package operations

type PostAllocateHostsActionEnum string

const (
	PostAllocateHostsActionEnumAllocateHosts PostAllocateHostsActionEnum = "AllocateHosts"
)

type PostAllocateHostsVersionEnum string

const (
	PostAllocateHostsVersionEnumTwoThousandAndSixteen1115 PostAllocateHostsVersionEnum = "2016-11-15"
)

type PostAllocateHostsQueryParams struct {
	Action  PostAllocateHostsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAllocateHostsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAllocateHostsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAllocateHostsRequest struct {
	QueryParams PostAllocateHostsQueryParams
	Headers     PostAllocateHostsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAllocateHostsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
