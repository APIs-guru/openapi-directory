package operations

type PostGetIdentityVerificationAttributesActionEnum string

const (
	PostGetIdentityVerificationAttributesActionEnumGetIdentityVerificationAttributes PostGetIdentityVerificationAttributesActionEnum = "GetIdentityVerificationAttributes"
)

type PostGetIdentityVerificationAttributesVersionEnum string

const (
	PostGetIdentityVerificationAttributesVersionEnumTwoThousandAndTen1201 PostGetIdentityVerificationAttributesVersionEnum = "2010-12-01"
)

type PostGetIdentityVerificationAttributesQueryParams struct {
	Action  PostGetIdentityVerificationAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetIdentityVerificationAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetIdentityVerificationAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetIdentityVerificationAttributesRequest struct {
	QueryParams PostGetIdentityVerificationAttributesQueryParams
	Headers     PostGetIdentityVerificationAttributesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetIdentityVerificationAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
