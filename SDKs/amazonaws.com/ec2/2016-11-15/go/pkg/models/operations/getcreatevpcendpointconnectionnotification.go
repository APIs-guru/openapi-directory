package operations

type GetCreateVpcEndpointConnectionNotificationActionEnum string

const (
	GetCreateVpcEndpointConnectionNotificationActionEnumCreateVpcEndpointConnectionNotification GetCreateVpcEndpointConnectionNotificationActionEnum = "CreateVpcEndpointConnectionNotification"
)

type GetCreateVpcEndpointConnectionNotificationVersionEnum string

const (
	GetCreateVpcEndpointConnectionNotificationVersionEnumTwoThousandAndSixteen1115 GetCreateVpcEndpointConnectionNotificationVersionEnum = "2016-11-15"
)

type GetCreateVpcEndpointConnectionNotificationQueryParams struct {
	Action                    GetCreateVpcEndpointConnectionNotificationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClientToken               *string                                               `queryParam:"style=form,explode=true,name=ClientToken"`
	ConnectionEvents          []string                                              `queryParam:"style=form,explode=true,name=ConnectionEvents"`
	ConnectionNotificationArn string                                                `queryParam:"style=form,explode=true,name=ConnectionNotificationArn"`
	DryRun                    *bool                                                 `queryParam:"style=form,explode=true,name=DryRun"`
	ServiceID                 *string                                               `queryParam:"style=form,explode=true,name=ServiceId"`
	Version                   GetCreateVpcEndpointConnectionNotificationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcEndpointID             *string                                               `queryParam:"style=form,explode=true,name=VpcEndpointId"`
}

type GetCreateVpcEndpointConnectionNotificationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateVpcEndpointConnectionNotificationRequest struct {
	QueryParams GetCreateVpcEndpointConnectionNotificationQueryParams
	Headers     GetCreateVpcEndpointConnectionNotificationHeaders
}

type GetCreateVpcEndpointConnectionNotificationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
