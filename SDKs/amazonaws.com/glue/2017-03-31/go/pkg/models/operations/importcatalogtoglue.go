package operations

import (
	"openapi/pkg/models/shared"
)

type ImportCatalogToGlueXAmzTargetEnum string

const (
	ImportCatalogToGlueXAmzTargetEnumAwsGlueImportCatalogToGlue ImportCatalogToGlueXAmzTargetEnum = "AWSGlue.ImportCatalogToGlue"
)

type ImportCatalogToGlueHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ImportCatalogToGlueXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ImportCatalogToGlueRequest struct {
	Headers ImportCatalogToGlueHeaders
	Request shared.ImportCatalogToGlueRequest `request:"mediaType=application/json"`
}

type ImportCatalogToGlueResponse struct {
	ContentType                 string
	ImportCatalogToGlueResponse map[string]interface{}
	InternalServiceException    *interface{}
	OperationTimeoutException   *interface{}
	StatusCode                  int64
}
