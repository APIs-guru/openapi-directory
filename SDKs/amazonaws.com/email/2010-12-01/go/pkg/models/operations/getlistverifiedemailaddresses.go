package operations

type GetListVerifiedEmailAddressesActionEnum string

const (
	GetListVerifiedEmailAddressesActionEnumListVerifiedEmailAddresses GetListVerifiedEmailAddressesActionEnum = "ListVerifiedEmailAddresses"
)

type GetListVerifiedEmailAddressesVersionEnum string

const (
	GetListVerifiedEmailAddressesVersionEnumTwoThousandAndTen1201 GetListVerifiedEmailAddressesVersionEnum = "2010-12-01"
)

type GetListVerifiedEmailAddressesQueryParams struct {
	Action  GetListVerifiedEmailAddressesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetListVerifiedEmailAddressesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListVerifiedEmailAddressesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListVerifiedEmailAddressesRequest struct {
	QueryParams GetListVerifiedEmailAddressesQueryParams
	Headers     GetListVerifiedEmailAddressesHeaders
}

type GetListVerifiedEmailAddressesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
