package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAssetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAssetRequestBody struct {
	AssetModelID string            `json:"assetModelId"`
	AssetName    string            `json:"assetName"`
	ClientToken  *string           `json:"clientToken"`
	Tags         map[string]string `json:"tags"`
}

type CreateAssetRequest struct {
	Headers CreateAssetHeaders
	Request CreateAssetRequestBody `request:"mediaType=application/json"`
}

type CreateAssetResponse struct {
	ConflictingOperationException  *interface{}
	ContentType                    string
	CreateAssetResponse            *shared.CreateAssetResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
