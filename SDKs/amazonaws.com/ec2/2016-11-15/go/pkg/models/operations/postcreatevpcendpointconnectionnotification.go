package operations

type PostCreateVpcEndpointConnectionNotificationActionEnum string

const (
	PostCreateVpcEndpointConnectionNotificationActionEnumCreateVpcEndpointConnectionNotification PostCreateVpcEndpointConnectionNotificationActionEnum = "CreateVpcEndpointConnectionNotification"
)

type PostCreateVpcEndpointConnectionNotificationVersionEnum string

const (
	PostCreateVpcEndpointConnectionNotificationVersionEnumTwoThousandAndSixteen1115 PostCreateVpcEndpointConnectionNotificationVersionEnum = "2016-11-15"
)

type PostCreateVpcEndpointConnectionNotificationQueryParams struct {
	Action  PostCreateVpcEndpointConnectionNotificationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateVpcEndpointConnectionNotificationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateVpcEndpointConnectionNotificationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateVpcEndpointConnectionNotificationRequest struct {
	QueryParams PostCreateVpcEndpointConnectionNotificationQueryParams
	Headers     PostCreateVpcEndpointConnectionNotificationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateVpcEndpointConnectionNotificationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
