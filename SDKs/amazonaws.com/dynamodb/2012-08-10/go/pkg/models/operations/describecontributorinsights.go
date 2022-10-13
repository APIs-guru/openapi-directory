package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeContributorInsightsXAmzTargetEnum string

const (
	DescribeContributorInsightsXAmzTargetEnumDynamoDb20120810DescribeContributorInsights DescribeContributorInsightsXAmzTargetEnum = "DynamoDB_20120810.DescribeContributorInsights"
)

type DescribeContributorInsightsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeContributorInsightsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeContributorInsightsRequest struct {
	Headers DescribeContributorInsightsHeaders
	Request shared.DescribeContributorInsightsInput `request:"mediaType=application/json"`
}

type DescribeContributorInsightsResponse struct {
	ContentType                       string
	DescribeContributorInsightsOutput *shared.DescribeContributorInsightsOutput
	InternalServerError               *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
}
