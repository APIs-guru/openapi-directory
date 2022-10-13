package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUsageReportSubscriptionXAmzTargetEnum string

const (
	CreateUsageReportSubscriptionXAmzTargetEnumPhotonAdminProxyServiceCreateUsageReportSubscription CreateUsageReportSubscriptionXAmzTargetEnum = "PhotonAdminProxyService.CreateUsageReportSubscription"
)

type CreateUsageReportSubscriptionHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateUsageReportSubscriptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateUsageReportSubscriptionRequest struct {
	Headers CreateUsageReportSubscriptionHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type CreateUsageReportSubscriptionResponse struct {
	ContentType                         string
	CreateUsageReportSubscriptionResult *shared.CreateUsageReportSubscriptionResult
	InvalidAccountStatusException       *interface{}
	InvalidRoleException                *interface{}
	LimitExceededException              *interface{}
	StatusCode                          int64
}
