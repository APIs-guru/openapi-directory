package operations

type UpdatePlacementPathParams struct {
	PlacementName string `pathParam:"style=simple,explode=false,name=placementName"`
	ProjectName   string `pathParam:"style=simple,explode=false,name=projectName"`
}

type UpdatePlacementHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdatePlacementRequestBody struct {
	Attributes map[string]string `json:"attributes,omitempty"`
}

type UpdatePlacementRequest struct {
	PathParams UpdatePlacementPathParams
	Headers    UpdatePlacementHeaders
	Request    UpdatePlacementRequestBody `request:"mediaType=application/json"`
}

type UpdatePlacementResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	UpdatePlacementResponse   map[string]interface{}
}
