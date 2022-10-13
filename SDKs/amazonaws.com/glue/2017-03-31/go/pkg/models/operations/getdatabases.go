package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabasesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetDatabasesXAmzTargetEnum string

const (
	GetDatabasesXAmzTargetEnumAwsGlueGetDatabases GetDatabasesXAmzTargetEnum = "AWSGlue.GetDatabases"
)

type GetDatabasesHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDatabasesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDatabasesRequest struct {
	QueryParams GetDatabasesQueryParams
	Headers     GetDatabasesHeaders
	Request     shared.GetDatabasesRequest `request:"mediaType=application/json"`
}

type GetDatabasesResponse struct {
	ContentType               string
	GetDatabasesResponse      *shared.GetDatabasesResponse
	GlueEncryptionException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
