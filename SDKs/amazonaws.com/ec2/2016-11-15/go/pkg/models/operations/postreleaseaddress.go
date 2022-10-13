package operations

type PostReleaseAddressActionEnum string

const (
	PostReleaseAddressActionEnumReleaseAddress PostReleaseAddressActionEnum = "ReleaseAddress"
)

type PostReleaseAddressVersionEnum string

const (
	PostReleaseAddressVersionEnumTwoThousandAndSixteen1115 PostReleaseAddressVersionEnum = "2016-11-15"
)

type PostReleaseAddressQueryParams struct {
	Action  PostReleaseAddressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostReleaseAddressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostReleaseAddressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostReleaseAddressRequest struct {
	QueryParams PostReleaseAddressQueryParams
	Headers     PostReleaseAddressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostReleaseAddressResponse struct {
	ContentType string
	StatusCode  int64
}
