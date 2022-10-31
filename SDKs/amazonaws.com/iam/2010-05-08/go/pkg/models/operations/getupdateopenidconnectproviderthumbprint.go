package operations

type GetUpdateOpenIDConnectProviderThumbprintActionEnum string

const (
	GetUpdateOpenIDConnectProviderThumbprintActionEnumUpdateOpenIDConnectProviderThumbprint GetUpdateOpenIDConnectProviderThumbprintActionEnum = "UpdateOpenIDConnectProviderThumbprint"
)

type GetUpdateOpenIDConnectProviderThumbprintVersionEnum string

const (
	GetUpdateOpenIDConnectProviderThumbprintVersionEnumTwoThousandAndTen0508 GetUpdateOpenIDConnectProviderThumbprintVersionEnum = "2010-05-08"
)

type GetUpdateOpenIDConnectProviderThumbprintQueryParams struct {
	Action                   GetUpdateOpenIDConnectProviderThumbprintActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	OpenIDConnectProviderArn string                                              `queryParam:"style=form,explode=true,name=OpenIDConnectProviderArn"`
	ThumbprintList           []string                                            `queryParam:"style=form,explode=true,name=ThumbprintList"`
	Version                  GetUpdateOpenIDConnectProviderThumbprintVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateOpenIDConnectProviderThumbprintHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetUpdateOpenIDConnectProviderThumbprintRequest struct {
	QueryParams GetUpdateOpenIDConnectProviderThumbprintQueryParams
	Headers     GetUpdateOpenIDConnectProviderThumbprintHeaders
}

type GetUpdateOpenIDConnectProviderThumbprintResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
