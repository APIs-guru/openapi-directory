package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeUsageReportSubscriptionsXAmzTargetEnum string

const (
	DescribeUsageReportSubscriptionsXAmzTargetEnumPhotonAdminProxyServiceDescribeUsageReportSubscriptions DescribeUsageReportSubscriptionsXAmzTargetEnum = "PhotonAdminProxyService.DescribeUsageReportSubscriptions"
)

type DescribeUsageReportSubscriptionsHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeUsageReportSubscriptionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeUsageReportSubscriptionsRequest struct {
	Headers DescribeUsageReportSubscriptionsHeaders
	Request shared.DescribeUsageReportSubscriptionsRequest `request:"mediaType=application/json"`
}

type DescribeUsageReportSubscriptionsResponse struct {
	ContentType                            string
	DescribeUsageReportSubscriptionsResult *shared.DescribeUsageReportSubscriptionsResult
	InvalidAccountStatusException          *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
}
