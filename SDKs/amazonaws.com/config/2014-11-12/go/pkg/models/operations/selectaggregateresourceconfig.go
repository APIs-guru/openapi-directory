package operations

import (
	"openapi/pkg/models/shared"
)

type SelectAggregateResourceConfigQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type SelectAggregateResourceConfigXAmzTargetEnum string

const (
	SelectAggregateResourceConfigXAmzTargetEnumStarlingDoveServiceSelectAggregateResourceConfig SelectAggregateResourceConfigXAmzTargetEnum = "StarlingDoveService.SelectAggregateResourceConfig"
)

type SelectAggregateResourceConfigHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SelectAggregateResourceConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SelectAggregateResourceConfigRequest struct {
	QueryParams SelectAggregateResourceConfigQueryParams
	Headers     SelectAggregateResourceConfigHeaders
	Request     shared.SelectAggregateResourceConfigRequest `request:"mediaType=application/json"`
}

type SelectAggregateResourceConfigResponse struct {
	ContentType                            string
	InvalidExpressionException             *interface{}
	InvalidLimitException                  *interface{}
	InvalidNextTokenException              *interface{}
	NoSuchConfigurationAggregatorException *interface{}
	SelectAggregateResourceConfigResponse  *shared.SelectAggregateResourceConfigResponse
	StatusCode                             int64
}
