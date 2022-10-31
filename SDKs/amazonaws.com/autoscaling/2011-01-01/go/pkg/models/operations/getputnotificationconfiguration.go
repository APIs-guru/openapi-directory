package operations

type GetPutNotificationConfigurationActionEnum string

const (
	GetPutNotificationConfigurationActionEnumPutNotificationConfiguration GetPutNotificationConfigurationActionEnum = "PutNotificationConfiguration"
)

type GetPutNotificationConfigurationVersionEnum string

const (
	GetPutNotificationConfigurationVersionEnumTwoThousandAndEleven0101 GetPutNotificationConfigurationVersionEnum = "2011-01-01"
)

type GetPutNotificationConfigurationQueryParams struct {
	Action               GetPutNotificationConfigurationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                                     `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	NotificationTypes    []string                                   `queryParam:"style=form,explode=true,name=NotificationTypes"`
	TopicArn             string                                     `queryParam:"style=form,explode=true,name=TopicARN"`
	Version              GetPutNotificationConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPutNotificationConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetPutNotificationConfigurationRequest struct {
	QueryParams GetPutNotificationConfigurationQueryParams
	Headers     GetPutNotificationConfigurationHeaders
}

type GetPutNotificationConfigurationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
