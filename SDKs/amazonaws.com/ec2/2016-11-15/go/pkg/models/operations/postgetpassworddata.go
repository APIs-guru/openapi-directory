package operations

type PostGetPasswordDataActionEnum string

const (
	PostGetPasswordDataActionEnumGetPasswordData PostGetPasswordDataActionEnum = "GetPasswordData"
)

type PostGetPasswordDataVersionEnum string

const (
	PostGetPasswordDataVersionEnumTwoThousandAndSixteen1115 PostGetPasswordDataVersionEnum = "2016-11-15"
)

type PostGetPasswordDataQueryParams struct {
	Action  PostGetPasswordDataActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetPasswordDataVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetPasswordDataHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetPasswordDataRequest struct {
	QueryParams PostGetPasswordDataQueryParams
	Headers     PostGetPasswordDataHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetPasswordDataResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
