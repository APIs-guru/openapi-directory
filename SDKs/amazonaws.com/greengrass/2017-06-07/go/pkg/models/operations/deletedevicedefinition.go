package operations

type DeleteDeviceDefinitionPathParams struct {
	DeviceDefinitionID string `pathParam:"style=simple,explode=false,name=DeviceDefinitionId"`
}

type DeleteDeviceDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteDeviceDefinitionRequest struct {
	PathParams DeleteDeviceDefinitionPathParams
	Headers    DeleteDeviceDefinitionHeaders
}

type DeleteDeviceDefinitionResponse struct {
	BadRequestException            *interface{}
	ContentType                    string
	DeleteDeviceDefinitionResponse map[string]interface{}
	StatusCode                     int64
}
