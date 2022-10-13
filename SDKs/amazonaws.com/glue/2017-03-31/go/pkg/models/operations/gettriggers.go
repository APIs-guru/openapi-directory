package operations

import (
	"openapi/pkg/models/shared"
)

type GetTriggersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetTriggersXAmzTargetEnum string

const (
	GetTriggersXAmzTargetEnumAwsGlueGetTriggers GetTriggersXAmzTargetEnum = "AWSGlue.GetTriggers"
)

type GetTriggersHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTriggersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetTriggersRequest struct {
	QueryParams GetTriggersQueryParams
	Headers     GetTriggersHeaders
	Request     shared.GetTriggersRequest `request:"mediaType=application/json"`
}

type GetTriggersResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetTriggersResponse       *shared.GetTriggersResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
