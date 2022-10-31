package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMatchmakingRuleSetsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeMatchmakingRuleSetsXAmzTargetEnum string

const (
	DescribeMatchmakingRuleSetsXAmzTargetEnumGameLiftDescribeMatchmakingRuleSets DescribeMatchmakingRuleSetsXAmzTargetEnum = "GameLift.DescribeMatchmakingRuleSets"
)

type DescribeMatchmakingRuleSetsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMatchmakingRuleSetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeMatchmakingRuleSetsRequest struct {
	QueryParams DescribeMatchmakingRuleSetsQueryParams
	Headers     DescribeMatchmakingRuleSetsHeaders
	Request     shared.DescribeMatchmakingRuleSetsInput `request:"mediaType=application/json"`
}

type DescribeMatchmakingRuleSetsResponse struct {
	ContentType                       string
	DescribeMatchmakingRuleSetsOutput *shared.DescribeMatchmakingRuleSetsOutput
	InternalServiceException          *interface{}
	InvalidRequestException           *interface{}
	NotFoundException                 *interface{}
	StatusCode                        int64
	UnsupportedRegionException        *interface{}
}
