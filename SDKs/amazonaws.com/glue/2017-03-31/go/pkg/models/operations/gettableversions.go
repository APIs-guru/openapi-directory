package operations

import (
	"openapi/pkg/models/shared"
)

type GetTableVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetTableVersionsXAmzTargetEnum string

const (
	GetTableVersionsXAmzTargetEnumAwsGlueGetTableVersions GetTableVersionsXAmzTargetEnum = "AWSGlue.GetTableVersions"
)

type GetTableVersionsHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTableVersionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetTableVersionsRequest struct {
	QueryParams GetTableVersionsQueryParams
	Headers     GetTableVersionsHeaders
	Request     shared.GetTableVersionsRequest `request:"mediaType=application/json"`
}

type GetTableVersionsResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetTableVersionsResponse  *shared.GetTableVersionsResponse
	GlueEncryptionException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
