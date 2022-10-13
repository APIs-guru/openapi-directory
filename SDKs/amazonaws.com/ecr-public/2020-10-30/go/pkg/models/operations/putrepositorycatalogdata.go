package operations

import (
	"openapi/pkg/models/shared"
)

type PutRepositoryCatalogDataXAmzTargetEnum string

const (
	PutRepositoryCatalogDataXAmzTargetEnumSpencerFrontendServicePutRepositoryCatalogData PutRepositoryCatalogDataXAmzTargetEnum = "SpencerFrontendService.PutRepositoryCatalogData"
)

type PutRepositoryCatalogDataHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutRepositoryCatalogDataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutRepositoryCatalogDataRequest struct {
	Headers PutRepositoryCatalogDataHeaders
	Request shared.PutRepositoryCatalogDataRequest `request:"mediaType=application/json"`
}

type PutRepositoryCatalogDataResponse struct {
	ContentType                      string
	InvalidParameterException        *interface{}
	PutRepositoryCatalogDataResponse *shared.PutRepositoryCatalogDataResponse
	RepositoryNotFoundException      *interface{}
	ServerException                  *interface{}
	StatusCode                       int64
}
