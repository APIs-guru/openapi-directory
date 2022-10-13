package operations

type DeleteDatasetContentPathParams struct {
	DatasetName string `pathParam:"style=simple,explode=false,name=datasetName"`
}

type DeleteDatasetContentQueryParams struct {
	VersionID *string `queryParam:"style=form,explode=true,name=versionId"`
}

type DeleteDatasetContentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteDatasetContentRequest struct {
	PathParams  DeleteDatasetContentPathParams
	QueryParams DeleteDatasetContentQueryParams
	Headers     DeleteDatasetContentHeaders
}

type DeleteDatasetContentResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
