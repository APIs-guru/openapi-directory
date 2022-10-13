package operations

import (
	"openapi/pkg/models/shared"
)

type ListTriggersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTriggersXAmzTargetEnum string

const (
	ListTriggersXAmzTargetEnumAwsGlueListTriggers ListTriggersXAmzTargetEnum = "AWSGlue.ListTriggers"
)

type ListTriggersHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTriggersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTriggersRequest struct {
	QueryParams ListTriggersQueryParams
	Headers     ListTriggersHeaders
	Request     shared.ListTriggersRequest `request:"mediaType=application/json"`
}

type ListTriggersResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	ListTriggersResponse      *shared.ListTriggersResponse
	OperationTimeoutException *interface{}
	StatusCode                int64
}
