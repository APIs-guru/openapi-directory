package operations

type DeleteDeploymentPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	DeploymentID string `pathParam:"style=simple,explode=false,name=deploymentId"`
}

type DeleteDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteDeploymentRequest struct {
	PathParams DeleteDeploymentPathParams
	Headers    DeleteDeploymentHeaders
}

type DeleteDeploymentResponse struct {
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
