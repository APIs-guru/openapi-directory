package operations

type StopBulkDeploymentPathParams struct {
	BulkDeploymentID string `pathParam:"style=simple,explode=false,name=BulkDeploymentId"`
}

type StopBulkDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StopBulkDeploymentRequest struct {
	PathParams StopBulkDeploymentPathParams
	Headers    StopBulkDeploymentHeaders
}

type StopBulkDeploymentResponse struct {
	BadRequestException        *interface{}
	ContentType                string
	StatusCode                 int64
	StopBulkDeploymentResponse map[string]interface{}
}
