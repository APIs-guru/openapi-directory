package operations

type DeleteDeploymentPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	DeploymentID string `pathParam:"style=simple,explode=false,name=deploymentId"`
}

type DeleteDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
