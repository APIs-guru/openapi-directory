package operations

type GetGetIdentityNotificationAttributesActionEnum string

const (
	GetGetIdentityNotificationAttributesActionEnumGetIdentityNotificationAttributes GetGetIdentityNotificationAttributesActionEnum = "GetIdentityNotificationAttributes"
)

type GetGetIdentityNotificationAttributesVersionEnum string

const (
	GetGetIdentityNotificationAttributesVersionEnumTwoThousandAndTen1201 GetGetIdentityNotificationAttributesVersionEnum = "2010-12-01"
)

type GetGetIdentityNotificationAttributesQueryParams struct {
	Action     GetGetIdentityNotificationAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Identities []string                                        `queryParam:"style=form,explode=true,name=Identities"`
	Version    GetGetIdentityNotificationAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetIdentityNotificationAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetIdentityNotificationAttributesRequest struct {
	QueryParams GetGetIdentityNotificationAttributesQueryParams
	Headers     GetGetIdentityNotificationAttributesHeaders
}

type GetGetIdentityNotificationAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
