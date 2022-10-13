package operations

type PostDisableEbsEncryptionByDefaultActionEnum string

const (
	PostDisableEbsEncryptionByDefaultActionEnumDisableEbsEncryptionByDefault PostDisableEbsEncryptionByDefaultActionEnum = "DisableEbsEncryptionByDefault"
)

type PostDisableEbsEncryptionByDefaultVersionEnum string

const (
	PostDisableEbsEncryptionByDefaultVersionEnumTwoThousandAndSixteen1115 PostDisableEbsEncryptionByDefaultVersionEnum = "2016-11-15"
)

type PostDisableEbsEncryptionByDefaultQueryParams struct {
	Action  PostDisableEbsEncryptionByDefaultActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisableEbsEncryptionByDefaultVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisableEbsEncryptionByDefaultHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisableEbsEncryptionByDefaultRequest struct {
	QueryParams PostDisableEbsEncryptionByDefaultQueryParams
	Headers     PostDisableEbsEncryptionByDefaultHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisableEbsEncryptionByDefaultResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
