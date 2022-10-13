package operations

type PostRegisterInstanceEventNotificationAttributesActionEnum string

const (
	PostRegisterInstanceEventNotificationAttributesActionEnumRegisterInstanceEventNotificationAttributes PostRegisterInstanceEventNotificationAttributesActionEnum = "RegisterInstanceEventNotificationAttributes"
)

type PostRegisterInstanceEventNotificationAttributesVersionEnum string

const (
	PostRegisterInstanceEventNotificationAttributesVersionEnumTwoThousandAndSixteen1115 PostRegisterInstanceEventNotificationAttributesVersionEnum = "2016-11-15"
)

type PostRegisterInstanceEventNotificationAttributesQueryParams struct {
	Action  PostRegisterInstanceEventNotificationAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRegisterInstanceEventNotificationAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRegisterInstanceEventNotificationAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRegisterInstanceEventNotificationAttributesRequest struct {
	QueryParams PostRegisterInstanceEventNotificationAttributesQueryParams
	Headers     PostRegisterInstanceEventNotificationAttributesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRegisterInstanceEventNotificationAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
