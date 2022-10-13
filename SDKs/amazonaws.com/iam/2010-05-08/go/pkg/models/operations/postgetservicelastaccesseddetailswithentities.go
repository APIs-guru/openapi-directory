package operations

type PostGetServiceLastAccessedDetailsWithEntitiesActionEnum string

const (
	PostGetServiceLastAccessedDetailsWithEntitiesActionEnumGetServiceLastAccessedDetailsWithEntities PostGetServiceLastAccessedDetailsWithEntitiesActionEnum = "GetServiceLastAccessedDetailsWithEntities"
)

type PostGetServiceLastAccessedDetailsWithEntitiesVersionEnum string

const (
	PostGetServiceLastAccessedDetailsWithEntitiesVersionEnumTwoThousandAndTen0508 PostGetServiceLastAccessedDetailsWithEntitiesVersionEnum = "2010-05-08"
)

type PostGetServiceLastAccessedDetailsWithEntitiesQueryParams struct {
	Action  PostGetServiceLastAccessedDetailsWithEntitiesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetServiceLastAccessedDetailsWithEntitiesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetServiceLastAccessedDetailsWithEntitiesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetServiceLastAccessedDetailsWithEntitiesRequest struct {
	QueryParams PostGetServiceLastAccessedDetailsWithEntitiesQueryParams
	Headers     PostGetServiceLastAccessedDetailsWithEntitiesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetServiceLastAccessedDetailsWithEntitiesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
