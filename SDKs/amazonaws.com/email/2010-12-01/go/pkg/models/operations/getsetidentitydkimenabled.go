package operations

type GetSetIdentityDkimEnabledActionEnum string

const (
	GetSetIdentityDkimEnabledActionEnumSetIdentityDkimEnabled GetSetIdentityDkimEnabledActionEnum = "SetIdentityDkimEnabled"
)

type GetSetIdentityDkimEnabledVersionEnum string

const (
	GetSetIdentityDkimEnabledVersionEnumTwoThousandAndTen1201 GetSetIdentityDkimEnabledVersionEnum = "2010-12-01"
)

type GetSetIdentityDkimEnabledQueryParams struct {
	Action      GetSetIdentityDkimEnabledActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DkimEnabled bool                                 `queryParam:"style=form,explode=true,name=DkimEnabled"`
	Identity    string                               `queryParam:"style=form,explode=true,name=Identity"`
	Version     GetSetIdentityDkimEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSetIdentityDkimEnabledHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSetIdentityDkimEnabledRequest struct {
	QueryParams GetSetIdentityDkimEnabledQueryParams
	Headers     GetSetIdentityDkimEnabledHeaders
}

type GetSetIdentityDkimEnabledResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
