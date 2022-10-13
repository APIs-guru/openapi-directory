package operations

type PostGetAccessKeyLastUsedActionEnum string

const (
	PostGetAccessKeyLastUsedActionEnumGetAccessKeyLastUsed PostGetAccessKeyLastUsedActionEnum = "GetAccessKeyLastUsed"
)

type PostGetAccessKeyLastUsedVersionEnum string

const (
	PostGetAccessKeyLastUsedVersionEnumTwoThousandAndTen0508 PostGetAccessKeyLastUsedVersionEnum = "2010-05-08"
)

type PostGetAccessKeyLastUsedQueryParams struct {
	Action  PostGetAccessKeyLastUsedActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetAccessKeyLastUsedVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetAccessKeyLastUsedHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetAccessKeyLastUsedRequest struct {
	QueryParams PostGetAccessKeyLastUsedQueryParams
	Headers     PostGetAccessKeyLastUsedHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetAccessKeyLastUsedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
