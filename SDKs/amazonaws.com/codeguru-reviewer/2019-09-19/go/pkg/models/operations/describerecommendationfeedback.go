package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRecommendationFeedbackPathParams struct {
	CodeReviewArn string `pathParam:"style=simple,explode=false,name=CodeReviewArn"`
}

type DescribeRecommendationFeedbackQueryParams struct {
	RecommendationID string  `queryParam:"style=form,explode=true,name=RecommendationId"`
	UserID           *string `queryParam:"style=form,explode=true,name=UserId"`
}

type DescribeRecommendationFeedbackHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeRecommendationFeedbackRequest struct {
	PathParams  DescribeRecommendationFeedbackPathParams
	QueryParams DescribeRecommendationFeedbackQueryParams
	Headers     DescribeRecommendationFeedbackHeaders
}

type DescribeRecommendationFeedbackResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DescribeRecommendationFeedbackResponse *shared.DescribeRecommendationFeedbackResponse
	InternalServerException                *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
	ValidationException                    *interface{}
}
