package operations

type DeleteNotificationChannelXAmzTargetEnum string

const (
	DeleteNotificationChannelXAmzTargetEnumAwsfms20180101DeleteNotificationChannel DeleteNotificationChannelXAmzTargetEnum = "AWSFMS_20180101.DeleteNotificationChannel"
)

type DeleteNotificationChannelHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteNotificationChannelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteNotificationChannelRequest struct {
	Headers DeleteNotificationChannelHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DeleteNotificationChannelResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidOperationException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
