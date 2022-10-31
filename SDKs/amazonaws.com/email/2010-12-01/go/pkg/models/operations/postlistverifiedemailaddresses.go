package operations

type PostListVerifiedEmailAddressesActionEnum string

const (
	PostListVerifiedEmailAddressesActionEnumListVerifiedEmailAddresses PostListVerifiedEmailAddressesActionEnum = "ListVerifiedEmailAddresses"
)

type PostListVerifiedEmailAddressesVersionEnum string

const (
	PostListVerifiedEmailAddressesVersionEnumTwoThousandAndTen1201 PostListVerifiedEmailAddressesVersionEnum = "2010-12-01"
)

type PostListVerifiedEmailAddressesQueryParams struct {
	Action  PostListVerifiedEmailAddressesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListVerifiedEmailAddressesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListVerifiedEmailAddressesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostListVerifiedEmailAddressesRequest struct {
	QueryParams PostListVerifiedEmailAddressesQueryParams
	Headers     PostListVerifiedEmailAddressesHeaders
}

type PostListVerifiedEmailAddressesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
