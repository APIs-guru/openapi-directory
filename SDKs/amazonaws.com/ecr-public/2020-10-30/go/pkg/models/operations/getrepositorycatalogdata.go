package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoryCatalogDataXAmzTargetEnum string

const (
	GetRepositoryCatalogDataXAmzTargetEnumSpencerFrontendServiceGetRepositoryCatalogData GetRepositoryCatalogDataXAmzTargetEnum = "SpencerFrontendService.GetRepositoryCatalogData"
)

type GetRepositoryCatalogDataHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRepositoryCatalogDataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRepositoryCatalogDataRequest struct {
	Headers GetRepositoryCatalogDataHeaders
	Request shared.GetRepositoryCatalogDataRequest `request:"mediaType=application/json"`
}

type GetRepositoryCatalogDataResponse struct {
	ContentType                      string
	GetRepositoryCatalogDataResponse *shared.GetRepositoryCatalogDataResponse
	InvalidParameterException        *interface{}
	RepositoryNotFoundException      *interface{}
	ServerException                  *interface{}
	StatusCode                       int64
}
