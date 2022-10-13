package operations

type PostDetachInstancesActionEnum string

const (
	PostDetachInstancesActionEnumDetachInstances PostDetachInstancesActionEnum = "DetachInstances"
)

type PostDetachInstancesVersionEnum string

const (
	PostDetachInstancesVersionEnumTwoThousandAndEleven0101 PostDetachInstancesVersionEnum = "2011-01-01"
)

type PostDetachInstancesQueryParams struct {
	Action  PostDetachInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDetachInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDetachInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDetachInstancesRequest struct {
	QueryParams PostDetachInstancesQueryParams
	Headers     PostDetachInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDetachInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
