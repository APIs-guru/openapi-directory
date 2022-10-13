package operations

type GetDeleteVpcEndpointConnectionNotificationsActionEnum string

const (
	GetDeleteVpcEndpointConnectionNotificationsActionEnumDeleteVpcEndpointConnectionNotifications GetDeleteVpcEndpointConnectionNotificationsActionEnum = "DeleteVpcEndpointConnectionNotifications"
)

type GetDeleteVpcEndpointConnectionNotificationsVersionEnum string

const (
	GetDeleteVpcEndpointConnectionNotificationsVersionEnumTwoThousandAndSixteen1115 GetDeleteVpcEndpointConnectionNotificationsVersionEnum = "2016-11-15"
)

type GetDeleteVpcEndpointConnectionNotificationsQueryParams struct {
	Action                   GetDeleteVpcEndpointConnectionNotificationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ConnectionNotificationID []string                                               `queryParam:"style=form,explode=true,name=ConnectionNotificationId"`
	DryRun                   *bool                                                  `queryParam:"style=form,explode=true,name=DryRun"`
	Version                  GetDeleteVpcEndpointConnectionNotificationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteVpcEndpointConnectionNotificationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteVpcEndpointConnectionNotificationsRequest struct {
	QueryParams GetDeleteVpcEndpointConnectionNotificationsQueryParams
	Headers     GetDeleteVpcEndpointConnectionNotificationsHeaders
}

type GetDeleteVpcEndpointConnectionNotificationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
