package operations

type CreatePlacementPathParams struct {
	ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
}

type CreatePlacementHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreatePlacementRequestBody struct {
	Attributes    map[string]string `json:"attributes"`
	PlacementName string            `json:"placementName"`
}

type CreatePlacementRequest struct {
	PathParams CreatePlacementPathParams
	Headers    CreatePlacementHeaders
	Request    CreatePlacementRequestBody `request:"mediaType=application/json"`
}

type CreatePlacementResponse struct {
	ContentType               string
	CreatePlacementResponse   map[string]interface{}
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceConflictException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
