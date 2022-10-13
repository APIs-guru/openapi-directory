package operations

type AssociateDeviceWithPlacementPathParams struct {
	DeviceTemplateName string `pathParam:"style=simple,explode=false,name=deviceTemplateName"`
	PlacementName      string `pathParam:"style=simple,explode=false,name=placementName"`
	ProjectName        string `pathParam:"style=simple,explode=false,name=projectName"`
}

type AssociateDeviceWithPlacementHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AssociateDeviceWithPlacementRequestBody struct {
	DeviceID string `json:"deviceId"`
}

type AssociateDeviceWithPlacementRequest struct {
	PathParams AssociateDeviceWithPlacementPathParams
	Headers    AssociateDeviceWithPlacementHeaders
	Request    AssociateDeviceWithPlacementRequestBody `request:"mediaType=application/json"`
}

type AssociateDeviceWithPlacementResponse struct {
	AssociateDeviceWithPlacementResponse map[string]interface{}
	ContentType                          string
	InternalFailureException             *interface{}
	InvalidRequestException              *interface{}
	ResourceConflictException            *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}
