package operations

type GetDeleteIdentityActionEnum string

const (
	GetDeleteIdentityActionEnumDeleteIdentity GetDeleteIdentityActionEnum = "DeleteIdentity"
)

type GetDeleteIdentityVersionEnum string

const (
	GetDeleteIdentityVersionEnumTwoThousandAndTen1201 GetDeleteIdentityVersionEnum = "2010-12-01"
)

type GetDeleteIdentityQueryParams struct {
	Action   GetDeleteIdentityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Identity string                       `queryParam:"style=form,explode=true,name=Identity"`
	Version  GetDeleteIdentityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteIdentityHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteIdentityRequest struct {
	QueryParams GetDeleteIdentityQueryParams
	Headers     GetDeleteIdentityHeaders
}

type GetDeleteIdentityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
