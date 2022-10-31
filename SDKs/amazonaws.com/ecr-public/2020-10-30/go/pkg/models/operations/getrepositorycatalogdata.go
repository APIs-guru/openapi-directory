package operations

import (
	"openapi/pkg/models/shared"
)

type GetRepositoryCatalogDataXAmzTargetEnum string

const (
	GetRepositoryCatalogDataXAmzTargetEnumSpencerFrontendServiceGetRepositoryCatalogData GetRepositoryCatalogDataXAmzTargetEnum = "SpencerFrontendService.GetRepositoryCatalogData"
)

type GetRepositoryCatalogDataHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRepositoryCatalogDataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
