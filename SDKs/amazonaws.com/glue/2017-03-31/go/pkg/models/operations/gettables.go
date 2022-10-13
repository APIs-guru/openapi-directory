package operations

import (
	"openapi/pkg/models/shared"
)

type GetTablesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetTablesXAmzTargetEnum string

const (
	GetTablesXAmzTargetEnumAwsGlueGetTables GetTablesXAmzTargetEnum = "AWSGlue.GetTables"
)

type GetTablesHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTablesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetTablesRequest struct {
	QueryParams GetTablesQueryParams
	Headers     GetTablesHeaders
	Request     shared.GetTablesRequest `request:"mediaType=application/json"`
}

type GetTablesResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetTablesResponse         *shared.GetTablesResponse
	GlueEncryptionException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
