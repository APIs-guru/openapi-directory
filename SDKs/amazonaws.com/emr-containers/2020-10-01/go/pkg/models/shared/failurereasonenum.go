package shared




type FailureReasonEnum string

const (
    FailureReasonEnumInternalError FailureReasonEnum = "INTERNAL_ERROR"
FailureReasonEnumUserError FailureReasonEnum = "USER_ERROR"
FailureReasonEnumValidationError FailureReasonEnum = "VALIDATION_ERROR"
FailureReasonEnumClusterUnavailable FailureReasonEnum = "CLUSTER_UNAVAILABLE"
)


