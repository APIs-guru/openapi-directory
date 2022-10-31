package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContributorInsightsXAmzTargetEnum string

const (
	UpdateContributorInsightsXAmzTargetEnumDynamoDb20120810UpdateContributorInsights UpdateContributorInsightsXAmzTargetEnum = "DynamoDB_20120810.UpdateContributorInsights"
)

type UpdateContributorInsightsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateContributorInsightsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateContributorInsightsRequest struct {
	Headers UpdateContributorInsightsHeaders
	Request shared.UpdateContributorInsightsInput `request:"mediaType=application/json"`
}

type UpdateContributorInsightsResponse struct {
	ContentType                     string
	InternalServerError             *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	UpdateContributorInsightsOutput *shared.UpdateContributorInsightsOutput
}
