package shared




type FailedItemErrorCodeEnum string

const (
    FailedItemErrorCodeEnumInvalidArn FailedItemErrorCodeEnum = "INVALID_ARN"
FailedItemErrorCodeEnumDuplicateArn FailedItemErrorCodeEnum = "DUPLICATE_ARN"
FailedItemErrorCodeEnumItemDoesNotExist FailedItemErrorCodeEnum = "ITEM_DOES_NOT_EXIST"
FailedItemErrorCodeEnumAccessDenied FailedItemErrorCodeEnum = "ACCESS_DENIED"
FailedItemErrorCodeEnumLimitExceeded FailedItemErrorCodeEnum = "LIMIT_EXCEEDED"
FailedItemErrorCodeEnumInternalError FailedItemErrorCodeEnum = "INTERNAL_ERROR"
)


