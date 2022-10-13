package operations

type PostModifyVpcEndpointConnectionNotificationActionEnum string

const (
	PostModifyVpcEndpointConnectionNotificationActionEnumModifyVpcEndpointConnectionNotification PostModifyVpcEndpointConnectionNotificationActionEnum = "ModifyVpcEndpointConnectionNotification"
)

type PostModifyVpcEndpointConnectionNotificationVersionEnum string

const (
	PostModifyVpcEndpointConnectionNotificationVersionEnumTwoThousandAndSixteen1115 PostModifyVpcEndpointConnectionNotificationVersionEnum = "2016-11-15"
)

type PostModifyVpcEndpointConnectionNotificationQueryParams struct {
	Action  PostModifyVpcEndpointConnectionNotificationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyVpcEndpointConnectionNotificationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyVpcEndpointConnectionNotificationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyVpcEndpointConnectionNotificationRequest struct {
	QueryParams PostModifyVpcEndpointConnectionNotificationQueryParams
	Headers     PostModifyVpcEndpointConnectionNotificationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyVpcEndpointConnectionNotificationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
