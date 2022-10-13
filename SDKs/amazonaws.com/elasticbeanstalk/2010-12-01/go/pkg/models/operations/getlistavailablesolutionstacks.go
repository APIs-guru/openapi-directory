package operations

type GetListAvailableSolutionStacksActionEnum string

const (
	GetListAvailableSolutionStacksActionEnumListAvailableSolutionStacks GetListAvailableSolutionStacksActionEnum = "ListAvailableSolutionStacks"
)

type GetListAvailableSolutionStacksVersionEnum string

const (
	GetListAvailableSolutionStacksVersionEnumTwoThousandAndTen1201 GetListAvailableSolutionStacksVersionEnum = "2010-12-01"
)

type GetListAvailableSolutionStacksQueryParams struct {
	Action  GetListAvailableSolutionStacksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetListAvailableSolutionStacksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListAvailableSolutionStacksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListAvailableSolutionStacksRequest struct {
	QueryParams GetListAvailableSolutionStacksQueryParams
	Headers     GetListAvailableSolutionStacksHeaders
}

type GetListAvailableSolutionStacksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
