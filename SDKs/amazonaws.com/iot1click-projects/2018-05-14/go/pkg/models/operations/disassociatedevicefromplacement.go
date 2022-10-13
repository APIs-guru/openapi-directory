package operations

type DisassociateDeviceFromPlacementPathParams struct {
	DeviceTemplateName string `pathParam:"style=simple,explode=false,name=deviceTemplateName"`
	PlacementName      string `pathParam:"style=simple,explode=false,name=placementName"`
	ProjectName        string `pathParam:"style=simple,explode=false,name=projectName"`
}

type DisassociateDeviceFromPlacementHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DisassociateDeviceFromPlacementRequest struct {
	PathParams DisassociateDeviceFromPlacementPathParams
	Headers    DisassociateDeviceFromPlacementHeaders
}

type DisassociateDeviceFromPlacementResponse struct {
	ContentType                             string
	DisassociateDeviceFromPlacementResponse map[string]interface{}
	InternalFailureException                *interface{}
	InvalidRequestException                 *interface{}
	ResourceNotFoundException               *interface{}
	StatusCode                              int64
	TooManyRequestsException                *interface{}
}
