package operations

type UpdateDeviceStatePathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type UpdateDeviceStateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDeviceStateRequestBody struct {
	Enabled *bool `json:"enabled"`
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
