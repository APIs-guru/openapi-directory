package operations

type UpdateDeviceDefinitionPathParams struct {
	DeviceDefinitionID string `pathParam:"style=simple,explode=false,name=DeviceDefinitionId"`
}

type UpdateDeviceDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDeviceDefinitionRequestBody struct {
	Name *string `json:"Name"`
}

type UpdateDeviceDefinitionRequest struct {
	PathParams UpdateDeviceDefinitionPathParams
	Headers    UpdateDeviceDefinitionHeaders
	Request    UpdateDeviceDefinitionRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceDefinitionResponse struct {
	BadRequestException            *interface{}
	ContentType                    string
	StatusCode                     int64
	UpdateDeviceDefinitionResponse map[string]interface{}
}
