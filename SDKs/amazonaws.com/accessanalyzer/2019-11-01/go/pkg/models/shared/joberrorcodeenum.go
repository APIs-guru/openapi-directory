package shared




type JobErrorCodeEnum string

const (
    JobErrorCodeEnumAuthorizationError JobErrorCodeEnum = "AUTHORIZATION_ERROR"
JobErrorCodeEnumResourceNotFoundError JobErrorCodeEnum = "RESOURCE_NOT_FOUND_ERROR"
JobErrorCodeEnumServiceQuotaExceededError JobErrorCodeEnum = "SERVICE_QUOTA_EXCEEDED_ERROR"
JobErrorCodeEnumServiceError JobErrorCodeEnum = "SERVICE_ERROR"
)


