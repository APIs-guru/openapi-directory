package shared

type BatchStatementErrorCodeEnumEnum string

const (
	BatchStatementErrorCodeEnumEnumConditionalCheckFailed          BatchStatementErrorCodeEnumEnum = "ConditionalCheckFailed"
	BatchStatementErrorCodeEnumEnumItemCollectionSizeLimitExceeded BatchStatementErrorCodeEnumEnum = "ItemCollectionSizeLimitExceeded"
	BatchStatementErrorCodeEnumEnumRequestLimitExceeded            BatchStatementErrorCodeEnumEnum = "RequestLimitExceeded"
	BatchStatementErrorCodeEnumEnumValidationError                 BatchStatementErrorCodeEnumEnum = "ValidationError"
	BatchStatementErrorCodeEnumEnumProvisionedThroughputExceeded   BatchStatementErrorCodeEnumEnum = "ProvisionedThroughputExceeded"
	BatchStatementErrorCodeEnumEnumTransactionConflict             BatchStatementErrorCodeEnumEnum = "TransactionConflict"
	BatchStatementErrorCodeEnumEnumThrottlingError                 BatchStatementErrorCodeEnumEnum = "ThrottlingError"
	BatchStatementErrorCodeEnumEnumInternalServerError             BatchStatementErrorCodeEnumEnum = "InternalServerError"
	BatchStatementErrorCodeEnumEnumResourceNotFound                BatchStatementErrorCodeEnumEnum = "ResourceNotFound"
	BatchStatementErrorCodeEnumEnumAccessDenied                    BatchStatementErrorCodeEnumEnum = "AccessDenied"
	BatchStatementErrorCodeEnumEnumDuplicateItem                   BatchStatementErrorCodeEnumEnum = "DuplicateItem"
)
