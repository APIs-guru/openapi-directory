package operations

type PostImportKeyPairActionEnum string

const (
	PostImportKeyPairActionEnumImportKeyPair PostImportKeyPairActionEnum = "ImportKeyPair"
)

type PostImportKeyPairVersionEnum string

const (
	PostImportKeyPairVersionEnumTwoThousandAndSixteen1115 PostImportKeyPairVersionEnum = "2016-11-15"
)

type PostImportKeyPairQueryParams struct {
	Action  PostImportKeyPairActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostImportKeyPairVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostImportKeyPairHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostImportKeyPairRequest struct {
	QueryParams PostImportKeyPairQueryParams
	Headers     PostImportKeyPairHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostImportKeyPairResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
