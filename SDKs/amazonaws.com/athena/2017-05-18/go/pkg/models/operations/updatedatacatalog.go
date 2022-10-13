package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDataCatalogXAmzTargetEnum string

const (
	UpdateDataCatalogXAmzTargetEnumAmazonAthenaUpdateDataCatalog UpdateDataCatalogXAmzTargetEnum = "AmazonAthena.UpdateDataCatalog"
)

type UpdateDataCatalogHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDataCatalogXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDataCatalogRequest struct {
	Headers UpdateDataCatalogHeaders
	Request shared.UpdateDataCatalogInput `request:"mediaType=application/json"`
}

type UpdateDataCatalogResponse struct {
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
	UpdateDataCatalogOutput map[string]interface{}
}
