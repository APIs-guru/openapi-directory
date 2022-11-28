from dataclasses import dataclass, field
from enum import Enum

class BatchStatementErrorCodeEnumEnum(str, Enum):
    CONDITIONAL_CHECK_FAILED = "ConditionalCheckFailed"
    ITEM_COLLECTION_SIZE_LIMIT_EXCEEDED = "ItemCollectionSizeLimitExceeded"
    REQUEST_LIMIT_EXCEEDED = "RequestLimitExceeded"
    VALIDATION_ERROR = "ValidationError"
    PROVISIONED_THROUGHPUT_EXCEEDED = "ProvisionedThroughputExceeded"
    TRANSACTION_CONFLICT = "TransactionConflict"
    THROTTLING_ERROR = "ThrottlingError"
    INTERNAL_SERVER_ERROR = "InternalServerError"
    RESOURCE_NOT_FOUND = "ResourceNotFound"
    ACCESS_DENIED = "AccessDenied"
    DUPLICATE_ITEM = "DuplicateItem"

