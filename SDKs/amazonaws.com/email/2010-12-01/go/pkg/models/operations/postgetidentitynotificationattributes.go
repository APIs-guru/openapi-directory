package operations

type PostGetIdentityNotificationAttributesActionEnum string

const (
	PostGetIdentityNotificationAttributesActionEnumGetIdentityNotificationAttributes PostGetIdentityNotificationAttributesActionEnum = "GetIdentityNotificationAttributes"
)

type PostGetIdentityNotificationAttributesVersionEnum string

const (
	PostGetIdentityNotificationAttributesVersionEnumTwoThousandAndTen1201 PostGetIdentityNotificationAttributesVersionEnum = "2010-12-01"
)

type PostGetIdentityNotificationAttributesQueryParams struct {
	Action  PostGetIdentityNotificationAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetIdentityNotificationAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetIdentityNotificationAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetIdentityNotificationAttributesRequest struct {
	QueryParams PostGetIdentityNotificationAttributesQueryParams
	Headers     PostGetIdentityNotificationAttributesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetIdentityNotificationAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
