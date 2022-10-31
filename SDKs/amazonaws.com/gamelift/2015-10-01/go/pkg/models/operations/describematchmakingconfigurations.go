package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMatchmakingConfigurationsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeMatchmakingConfigurationsXAmzTargetEnum string

const (
	DescribeMatchmakingConfigurationsXAmzTargetEnumGameLiftDescribeMatchmakingConfigurations DescribeMatchmakingConfigurationsXAmzTargetEnum = "GameLift.DescribeMatchmakingConfigurations"
)

type DescribeMatchmakingConfigurationsHeaders struct {
	XAmzAlgorithm     *string                                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMatchmakingConfigurationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeMatchmakingConfigurationsRequest struct {
	QueryParams DescribeMatchmakingConfigurationsQueryParams
	Headers     DescribeMatchmakingConfigurationsHeaders
	Request     shared.DescribeMatchmakingConfigurationsInput `request:"mediaType=application/json"`
}

type DescribeMatchmakingConfigurationsResponse struct {
	ContentType                             string
	DescribeMatchmakingConfigurationsOutput *shared.DescribeMatchmakingConfigurationsOutput
	InternalServiceException                *interface{}
	InvalidRequestException                 *interface{}
	StatusCode                              int64
	UnsupportedRegionException              *interface{}
}
