package operations

type GetListInstanceProfilesActionEnum string

const (
	GetListInstanceProfilesActionEnumListInstanceProfiles GetListInstanceProfilesActionEnum = "ListInstanceProfiles"
)

type GetListInstanceProfilesVersionEnum string

const (
	GetListInstanceProfilesVersionEnumTwoThousandAndTen0508 GetListInstanceProfilesVersionEnum = "2010-05-08"
)

type GetListInstanceProfilesQueryParams struct {
	Action     GetListInstanceProfilesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                            `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems   *int64                             `queryParam:"style=form,explode=true,name=MaxItems"`
	PathPrefix *string                            `queryParam:"style=form,explode=true,name=PathPrefix"`
	Version    GetListInstanceProfilesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListInstanceProfilesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListInstanceProfilesRequest struct {
	QueryParams GetListInstanceProfilesQueryParams
	Headers     GetListInstanceProfilesHeaders
}

type GetListInstanceProfilesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
