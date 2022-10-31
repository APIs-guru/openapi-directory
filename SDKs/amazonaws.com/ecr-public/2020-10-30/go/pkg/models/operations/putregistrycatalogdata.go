package operations

import (
	"openapi/pkg/models/shared"
)

type PutRegistryCatalogDataXAmzTargetEnum string

const (
	PutRegistryCatalogDataXAmzTargetEnumSpencerFrontendServicePutRegistryCatalogData PutRegistryCatalogDataXAmzTargetEnum = "SpencerFrontendService.PutRegistryCatalogData"
)

type PutRegistryCatalogDataHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutRegistryCatalogDataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutRegistryCatalogDataRequest struct {
	Headers PutRegistryCatalogDataHeaders
	Request shared.PutRegistryCatalogDataRequest `request:"mediaType=application/json"`
}

type PutRegistryCatalogDataResponse struct {
	ContentType                    string
	InvalidParameterException      *interface{}
	PutRegistryCatalogDataResponse *shared.PutRegistryCatalogDataResponse
	ServerException                *interface{}
	StatusCode                     int64
	UnsupportedCommandException    *interface{}
}
