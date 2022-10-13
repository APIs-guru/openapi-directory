package operations

type PostGetIdentityMailFromDomainAttributesActionEnum string

const (
	PostGetIdentityMailFromDomainAttributesActionEnumGetIdentityMailFromDomainAttributes PostGetIdentityMailFromDomainAttributesActionEnum = "GetIdentityMailFromDomainAttributes"
)

type PostGetIdentityMailFromDomainAttributesVersionEnum string

const (
	PostGetIdentityMailFromDomainAttributesVersionEnumTwoThousandAndTen1201 PostGetIdentityMailFromDomainAttributesVersionEnum = "2010-12-01"
)

type PostGetIdentityMailFromDomainAttributesQueryParams struct {
	Action  PostGetIdentityMailFromDomainAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetIdentityMailFromDomainAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetIdentityMailFromDomainAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetIdentityMailFromDomainAttributesRequest struct {
	QueryParams PostGetIdentityMailFromDomainAttributesQueryParams
	Headers     PostGetIdentityMailFromDomainAttributesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetIdentityMailFromDomainAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
