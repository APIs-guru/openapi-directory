package operations

type DeleteUsageReportSubscriptionXAmzTargetEnum string

const (
	DeleteUsageReportSubscriptionXAmzTargetEnumPhotonAdminProxyServiceDeleteUsageReportSubscription DeleteUsageReportSubscriptionXAmzTargetEnum = "PhotonAdminProxyService.DeleteUsageReportSubscription"
)

type DeleteUsageReportSubscriptionHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteUsageReportSubscriptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteUsageReportSubscriptionRequest struct {
	Headers DeleteUsageReportSubscriptionHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DeleteUsageReportSubscriptionResponse struct {
	ContentType                         string
	DeleteUsageReportSubscriptionResult map[string]interface{}
	InvalidAccountStatusException       *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
}
