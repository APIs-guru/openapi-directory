package operations

type GetModifyIdentityIDFormatActionEnum string

const (
	GetModifyIdentityIDFormatActionEnumModifyIdentityIDFormat GetModifyIdentityIDFormatActionEnum = "ModifyIdentityIdFormat"
)

type GetModifyIdentityIDFormatVersionEnum string

const (
	GetModifyIdentityIDFormatVersionEnumTwoThousandAndSixteen1115 GetModifyIdentityIDFormatVersionEnum = "2016-11-15"
)

type GetModifyIdentityIDFormatQueryParams struct {
	Action       GetModifyIdentityIDFormatActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PrincipalArn string                               `queryParam:"style=form,explode=true,name=PrincipalArn"`
	Resource     string                               `queryParam:"style=form,explode=true,name=Resource"`
	UseLongIds   bool                                 `queryParam:"style=form,explode=true,name=UseLongIds"`
	Version      GetModifyIdentityIDFormatVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyIdentityIDFormatHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyIdentityIDFormatRequest struct {
	QueryParams GetModifyIdentityIDFormatQueryParams
	Headers     GetModifyIdentityIDFormatHeaders
}

type GetModifyIdentityIDFormatResponse struct {
	ContentType string
	StatusCode  int64
}
