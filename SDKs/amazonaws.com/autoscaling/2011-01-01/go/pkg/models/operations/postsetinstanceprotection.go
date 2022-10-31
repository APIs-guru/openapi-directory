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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
