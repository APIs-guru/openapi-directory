package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegistryCatalogDataXAmzTargetEnum string

const (
	GetRegistryCatalogDataXAmzTargetEnumSpencerFrontendServiceGetRegistryCatalogData GetRegistryCatalogDataXAmzTargetEnum = "SpencerFrontendService.GetRegistryCatalogData"
)

type GetRegistryCatalogDataHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRegistryCatalogDataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRegistryCatalogDataRequest struct {
	Headers GetRegistryCatalogDataHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetRegistryCatalogDataResponse struct {
	ContentType                    string
	GetRegistryCatalogDataResponse *shared.GetRegistryCatalogDataResponse
	ServerException                *interface{}
	StatusCode                     int64
	UnsupportedCommandException    *interface{}
}
