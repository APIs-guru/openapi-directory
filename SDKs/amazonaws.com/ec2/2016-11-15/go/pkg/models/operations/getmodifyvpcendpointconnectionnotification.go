package operations

type GetModifyVpcEndpointConnectionNotificationActionEnum string

const (
	GetModifyVpcEndpointConnectionNotificationActionEnumModifyVpcEndpointConnectionNotification GetModifyVpcEndpointConnectionNotificationActionEnum = "ModifyVpcEndpointConnectionNotification"
)

type GetModifyVpcEndpointConnectionNotificationVersionEnum string

const (
	GetModifyVpcEndpointConnectionNotificationVersionEnumTwoThousandAndSixteen1115 GetModifyVpcEndpointConnectionNotificationVersionEnum = "2016-11-15"
)

type GetModifyVpcEndpointConnectionNotificationQueryParams struct {
	Action                    GetModifyVpcEndpointConnectionNotificationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ConnectionEvents          []string                                              `queryParam:"style=form,explode=true,name=ConnectionEvents"`
	ConnectionNotificationArn *string                                               `queryParam:"style=form,explode=true,name=ConnectionNotificationArn"`
	ConnectionNotificationID  string                                                `queryParam:"style=form,explode=true,name=ConnectionNotificationId"`
	DryRun                    *bool                                                 `queryParam:"style=form,explode=true,name=DryRun"`
	Version                   GetModifyVpcEndpointConnectionNotificationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyVpcEndpointConnectionNotificationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyVpcEndpointConnectionNotificationRequest struct {
	QueryParams GetModifyVpcEndpointConnectionNotificationQueryParams
	Headers     GetModifyVpcEndpointConnectionNotificationHeaders
}

type GetModifyVpcEndpointConnectionNotificationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
