package operations

import (
	"openapi/pkg/models/shared"
)

type ListAutoScalingConfigurationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAutoScalingConfigurationsXAmzTargetEnum string

const (
	ListAutoScalingConfigurationsXAmzTargetEnumAppRunnerListAutoScalingConfigurations ListAutoScalingConfigurationsXAmzTargetEnum = "AppRunner.ListAutoScalingConfigurations"
)

type ListAutoScalingConfigurationsHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAutoScalingConfigurationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAutoScalingConfigurationsRequest struct {
	QueryParams ListAutoScalingConfigurationsQueryParams
	Headers     ListAutoScalingConfigurationsHeaders
	Request     shared.ListAutoScalingConfigurationsRequest `request:"mediaType=application/json"`
}

type ListAutoScalingConfigurationsResponse struct {
	ContentType                           string
	InternalServiceErrorException         *interface{}
	InvalidRequestException               *interface{}
	ListAutoScalingConfigurationsResponse *shared.ListAutoScalingConfigurationsResponse
	StatusCode                            int64
}
