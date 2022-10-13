package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAssetModelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAssetModelRequestBody struct {
	AssetModelCompositeModels []shared.AssetModelCompositeModelDefinition `json:"assetModelCompositeModels"`
	AssetModelDescription     *string                                     `json:"assetModelDescription"`
	AssetModelHierarchies     []shared.AssetModelHierarchyDefinition      `json:"assetModelHierarchies"`
	AssetModelName            string                                      `json:"assetModelName"`
	AssetModelProperties      []shared.AssetModelPropertyDefinition       `json:"assetModelProperties"`
	ClientToken               *string                                     `json:"clientToken"`
	Tags                      map[string]string                           `json:"tags"`
}

type CreateAssetModelRequest struct {
	Headers CreateAssetModelHeaders
	Request CreateAssetModelRequestBody `request:"mediaType=application/json"`
}

type CreateAssetModelResponse struct {
	ConflictingOperationException  *interface{}
	ContentType                    string
	CreateAssetModelResponse       *shared.CreateAssetModelResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
