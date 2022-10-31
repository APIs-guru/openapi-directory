package operations

type PostDeregisterInstanceEventNotificationAttributesActionEnum string

const (
	PostDeregisterInstanceEventNotificationAttributesActionEnumDeregisterInstanceEventNotificationAttributes PostDeregisterInstanceEventNotificationAttributesActionEnum = "DeregisterInstanceEventNotificationAttributes"
)

type PostDeregisterInstanceEventNotificationAttributesVersionEnum string

const (
	PostDeregisterInstanceEventNotificationAttributesVersionEnumTwoThousandAndSixteen1115 PostDeregisterInstanceEventNotificationAttributesVersionEnum = "2016-11-15"
)

type PostDeregisterInstanceEventNotificationAttributesQueryParams struct {
	Action  PostDeregisterInstanceEventNotificationAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeregisterInstanceEventNotificationAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeregisterInstanceEventNotificationAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeregisterInstanceEventNotificationAttributesRequest struct {
	QueryParams PostDeregisterInstanceEventNotificationAttributesQueryParams
	Headers     PostDeregisterInstanceEventNotificationAttributesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeregisterInstanceEventNotificationAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
