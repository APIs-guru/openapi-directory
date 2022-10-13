package operations

type PostGetServiceLastAccessedDetailsActionEnum string

const (
	PostGetServiceLastAccessedDetailsActionEnumGetServiceLastAccessedDetails PostGetServiceLastAccessedDetailsActionEnum = "GetServiceLastAccessedDetails"
)

type PostGetServiceLastAccessedDetailsVersionEnum string

const (
	PostGetServiceLastAccessedDetailsVersionEnumTwoThousandAndTen0508 PostGetServiceLastAccessedDetailsVersionEnum = "2010-05-08"
)

type PostGetServiceLastAccessedDetailsQueryParams struct {
	Action  PostGetServiceLastAccessedDetailsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetServiceLastAccessedDetailsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetServiceLastAccessedDetailsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetServiceLastAccessedDetailsRequest struct {
	QueryParams PostGetServiceLastAccessedDetailsQueryParams
	Headers     PostGetServiceLastAccessedDetailsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetServiceLastAccessedDetailsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
