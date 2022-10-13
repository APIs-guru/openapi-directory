package operations

import (
	"openapi/pkg/models/shared"
)

type GetInsightSelectorsXAmzTargetEnum string

const (
	GetInsightSelectorsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101GetInsightSelectors GetInsightSelectorsXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors"
)

type GetInsightSelectorsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInsightSelectorsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetInsightSelectorsRequest struct {
	Headers GetInsightSelectorsHeaders
	Request shared.GetInsightSelectorsRequest `request:"mediaType=application/json"`
}

type GetInsightSelectorsResponse struct {
	ContentType                    string
	GetInsightSelectorsResponse    *shared.GetInsightSelectorsResponse
	InsightNotEnabledException     *interface{}
	InvalidTrailNameException      *interface{}
	OperationNotPermittedException *interface{}
	StatusCode                     int64
	TrailNotFoundException         *interface{}
	UnsupportedOperationException  *interface{}
}
