package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcePoliciesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetResourcePoliciesXAmzTargetEnum string

const (
	GetResourcePoliciesXAmzTargetEnumAwsGlueGetResourcePolicies GetResourcePoliciesXAmzTargetEnum = "AWSGlue.GetResourcePolicies"
)

type GetResourcePoliciesHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResourcePoliciesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetResourcePoliciesRequest struct {
	QueryParams GetResourcePoliciesQueryParams
	Headers     GetResourcePoliciesHeaders
	Request     shared.GetResourcePoliciesRequest `request:"mediaType=application/json"`
}

type GetResourcePoliciesResponse struct {
	ContentType                 string
	GetResourcePoliciesResponse *shared.GetResourcePoliciesResponse
	GlueEncryptionException     *interface{}
	InternalServiceException    *interface{}
	InvalidInputException       *interface{}
	OperationTimeoutException   *interface{}
	StatusCode                  int64
}
