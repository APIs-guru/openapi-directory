package shared




type GrpcRetryPolicyEventEnum string

const (
    GrpcRetryPolicyEventEnumCancelled GrpcRetryPolicyEventEnum = "cancelled"
GrpcRetryPolicyEventEnumDeadlineExceeded GrpcRetryPolicyEventEnum = "deadline-exceeded"
GrpcRetryPolicyEventEnumInternal GrpcRetryPolicyEventEnum = "internal"
GrpcRetryPolicyEventEnumResourceExhausted GrpcRetryPolicyEventEnum = "resource-exhausted"
GrpcRetryPolicyEventEnumUnavailable GrpcRetryPolicyEventEnum = "unavailable"
)


