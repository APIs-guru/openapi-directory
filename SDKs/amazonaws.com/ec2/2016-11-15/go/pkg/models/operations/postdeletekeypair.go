package operations

type PostDeleteKeyPairActionEnum string

const (
	PostDeleteKeyPairActionEnumDeleteKeyPair PostDeleteKeyPairActionEnum = "DeleteKeyPair"
)

type PostDeleteKeyPairVersionEnum string

const (
	PostDeleteKeyPairVersionEnumTwoThousandAndSixteen1115 PostDeleteKeyPairVersionEnum = "2016-11-15"
)

type PostDeleteKeyPairQueryParams struct {
	Action  PostDeleteKeyPairActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteKeyPairVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteKeyPairHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteKeyPairRequest struct {
	QueryParams PostDeleteKeyPairQueryParams
	Headers     PostDeleteKeyPairHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteKeyPairResponse struct {
	ContentType string
	StatusCode  int64
}
