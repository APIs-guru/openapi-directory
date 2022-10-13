package operations

import (
	"openapi/pkg/models/shared"
)

type ListContributorInsightsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListContributorInsightsXAmzTargetEnum string

const (
	ListContributorInsightsXAmzTargetEnumDynamoDb20120810ListContributorInsights ListContributorInsightsXAmzTargetEnum = "DynamoDB_20120810.ListContributorInsights"
)

type ListContributorInsightsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListContributorInsightsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListContributorInsightsRequest struct {
	QueryParams ListContributorInsightsQueryParams
	Headers     ListContributorInsightsHeaders
	Request     shared.ListContributorInsightsInput `request:"mediaType=application/json"`
}

type ListContributorInsightsResponse struct {
	ContentType                   string
	InternalServerError           *interface{}
	ListContributorInsightsOutput *shared.ListContributorInsightsOutput
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
