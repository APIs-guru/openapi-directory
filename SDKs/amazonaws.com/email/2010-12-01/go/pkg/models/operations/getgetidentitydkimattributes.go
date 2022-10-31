package operations

type GetGetIdentityDkimAttributesActionEnum string

const (
	GetGetIdentityDkimAttributesActionEnumGetIdentityDkimAttributes GetGetIdentityDkimAttributesActionEnum = "GetIdentityDkimAttributes"
)

type GetGetIdentityDkimAttributesVersionEnum string

const (
	GetGetIdentityDkimAttributesVersionEnumTwoThousandAndTen1201 GetGetIdentityDkimAttributesVersionEnum = "2010-12-01"
)

type GetGetIdentityDkimAttributesQueryParams struct {
	Action     GetGetIdentityDkimAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Identities []string                                `queryParam:"style=form,explode=true,name=Identities"`
	Version    GetGetIdentityDkimAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetIdentityDkimAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetIdentityDkimAttributesRequest struct {
	QueryParams GetGetIdentityDkimAttributesQueryParams
	Headers     GetGetIdentityDkimAttributesHeaders
}

type GetGetIdentityDkimAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
