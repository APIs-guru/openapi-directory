package operations

import (
	"openapi/pkg/models/shared"
)

type RefreshSchemasXAmzTargetEnum string

const (
	RefreshSchemasXAmzTargetEnumAmazonDmSv20160101RefreshSchemas RefreshSchemasXAmzTargetEnum = "AmazonDMSv20160101.RefreshSchemas"
)

type RefreshSchemasHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RefreshSchemasXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RefreshSchemasRequest struct {
	Headers RefreshSchemasHeaders
	Request shared.RefreshSchemasMessage `request:"mediaType=application/json"`
}

type RefreshSchemasResponse struct {
	ContentType                string
	InvalidResourceStateFault  *interface{}
	KmsKeyNotAccessibleFault   *interface{}
	RefreshSchemasResponse     *shared.RefreshSchemasResponse
	ResourceNotFoundFault      *interface{}
	ResourceQuotaExceededFault *interface{}
	StatusCode                 int64
}
