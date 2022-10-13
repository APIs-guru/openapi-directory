package operations

type PostSetInstanceProtectionActionEnum string

const (
	PostSetInstanceProtectionActionEnumSetInstanceProtection PostSetInstanceProtectionActionEnum = "SetInstanceProtection"
)

type PostSetInstanceProtectionVersionEnum string

const (
	PostSetInstanceProtectionVersionEnumTwoThousandAndEleven0101 PostSetInstanceProtectionVersionEnum = "2011-01-01"
)

type PostSetInstanceProtectionQueryParams struct {
	Action  PostSetInstanceProtectionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetInstanceProtectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetInstanceProtectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSetInstanceProtectionRequest struct {
	QueryParams PostSetInstanceProtectionQueryParams
	Headers     PostSetInstanceProtectionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetInstanceProtectionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
