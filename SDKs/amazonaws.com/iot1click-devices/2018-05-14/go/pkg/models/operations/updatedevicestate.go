package operations

type UpdateDeviceStatePathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type UpdateDeviceStateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateDeviceStateRequestBody struct {
	Enabled *bool `json:"enabled,omitempty"`
}

type UpdateDeviceStateRequest struct {
	PathParams UpdateDeviceStatePathParams
	Headers    UpdateDeviceStateHeaders
	Request    UpdateDeviceStateRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceStateResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateDeviceStateResponse map[string]interface{}
}
