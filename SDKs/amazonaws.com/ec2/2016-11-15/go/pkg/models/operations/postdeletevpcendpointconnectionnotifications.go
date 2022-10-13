package operations

type PostDeleteVpcEndpointConnectionNotificationsActionEnum string

const (
	PostDeleteVpcEndpointConnectionNotificationsActionEnumDeleteVpcEndpointConnectionNotifications PostDeleteVpcEndpointConnectionNotificationsActionEnum = "DeleteVpcEndpointConnectionNotifications"
)

type PostDeleteVpcEndpointConnectionNotificationsVersionEnum string

const (
	PostDeleteVpcEndpointConnectionNotificationsVersionEnumTwoThousandAndSixteen1115 PostDeleteVpcEndpointConnectionNotificationsVersionEnum = "2016-11-15"
)

type PostDeleteVpcEndpointConnectionNotificationsQueryParams struct {
	Action  PostDeleteVpcEndpointConnectionNotificationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteVpcEndpointConnectionNotificationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteVpcEndpointConnectionNotificationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteVpcEndpointConnectionNotificationsRequest struct {
	QueryParams PostDeleteVpcEndpointConnectionNotificationsQueryParams
	Headers     PostDeleteVpcEndpointConnectionNotificationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteVpcEndpointConnectionNotificationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
