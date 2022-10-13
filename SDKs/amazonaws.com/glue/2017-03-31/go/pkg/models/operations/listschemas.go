package operations

import (
	"openapi/pkg/models/shared"
)

type ListSchemasQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListSchemasXAmzTargetEnum string

const (
	ListSchemasXAmzTargetEnumAwsGlueListSchemas ListSchemasXAmzTargetEnum = "AWSGlue.ListSchemas"
)

type ListSchemasHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSchemasXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListSchemasRequest struct {
	QueryParams ListSchemasQueryParams
	Headers     ListSchemasHeaders
	Request     shared.ListSchemasInput `request:"mediaType=application/json"`
}

type ListSchemasResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	EntityNotFoundException  *interface{}
	InternalServiceException *interface{}
	InvalidInputException    *interface{}
	ListSchemasResponse      *shared.ListSchemasResponse
	StatusCode               int64
}
