package operations

type DisassociateDeviceFromPlacementPathParams struct {
	DeviceTemplateName string `pathParam:"style=simple,explode=false,name=deviceTemplateName"`
	PlacementName      string `pathParam:"style=simple,explode=false,name=placementName"`
	ProjectName        string `pathParam:"style=simple,explode=false,name=projectName"`
}

type DisassociateDeviceFromPlacementHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
