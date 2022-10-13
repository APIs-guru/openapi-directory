package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDataCatalogXAmzTargetEnum string

const (
	CreateDataCatalogXAmzTargetEnumAmazonAthenaCreateDataCatalog CreateDataCatalogXAmzTargetEnum = "AmazonAthena.CreateDataCatalog"
)

type CreateDataCatalogHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDataCatalogXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDataCatalogRequest struct {
	Headers CreateDataCatalogHeaders
	Request shared.CreateDataCatalogInput `request:"mediaType=application/json"`
}

type CreateDataCatalogResponse struct {
	ContentType             string
	CreateDataCatalogOutput map[string]interface{}
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
