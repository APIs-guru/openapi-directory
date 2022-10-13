package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDatasetContentPathParams struct {
	DatasetName string `pathParam:"style=simple,explode=false,name=datasetName"`
}

type CreateDatasetContentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDatasetContentRequestBody struct {
	VersionID *string `json:"versionId"`
}

type CreateDatasetContentRequest struct {
	PathParams CreateDatasetContentPathParams
	Headers    CreateDatasetContentHeaders
	Request    CreateDatasetContentRequestBody `request:"mediaType=application/json"`
}

type CreateDatasetContentResponse struct {
	ContentType                  string
	CreateDatasetContentResponse *shared.CreateDatasetContentResponse
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
