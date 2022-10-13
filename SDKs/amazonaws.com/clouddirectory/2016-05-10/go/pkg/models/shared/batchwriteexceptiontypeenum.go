package shared

type BatchWriteExceptionTypeEnum string

const (
	BatchWriteExceptionTypeEnumInternalServiceException         BatchWriteExceptionTypeEnum = "InternalServiceException"
	BatchWriteExceptionTypeEnumValidationException              BatchWriteExceptionTypeEnum = "ValidationException"
	BatchWriteExceptionTypeEnumInvalidArnException              BatchWriteExceptionTypeEnum = "InvalidArnException"
	BatchWriteExceptionTypeEnumLinkNameAlreadyInUseException    BatchWriteExceptionTypeEnum = "LinkNameAlreadyInUseException"
	BatchWriteExceptionTypeEnumStillContainsLinksException      BatchWriteExceptionTypeEnum = "StillContainsLinksException"
	BatchWriteExceptionTypeEnumFacetValidationException         BatchWriteExceptionTypeEnum = "FacetValidationException"
	BatchWriteExceptionTypeEnumObjectNotDetachedException       BatchWriteExceptionTypeEnum = "ObjectNotDetachedException"
	BatchWriteExceptionTypeEnumResourceNotFoundException        BatchWriteExceptionTypeEnum = "ResourceNotFoundException"
	BatchWriteExceptionTypeEnumAccessDeniedException            BatchWriteExceptionTypeEnum = "AccessDeniedException"
	BatchWriteExceptionTypeEnumInvalidAttachmentException       BatchWriteExceptionTypeEnum = "InvalidAttachmentException"
	BatchWriteExceptionTypeEnumNotIndexException                BatchWriteExceptionTypeEnum = "NotIndexException"
	BatchWriteExceptionTypeEnumNotNodeException                 BatchWriteExceptionTypeEnum = "NotNodeException"
	BatchWriteExceptionTypeEnumIndexedAttributeMissingException BatchWriteExceptionTypeEnum = "IndexedAttributeMissingException"
	BatchWriteExceptionTypeEnumObjectAlreadyDetachedException   BatchWriteExceptionTypeEnum = "ObjectAlreadyDetachedException"
	BatchWriteExceptionTypeEnumNotPolicyException               BatchWriteExceptionTypeEnum = "NotPolicyException"
	BatchWriteExceptionTypeEnumDirectoryNotEnabledException     BatchWriteExceptionTypeEnum = "DirectoryNotEnabledException"
	BatchWriteExceptionTypeEnumLimitExceededException           BatchWriteExceptionTypeEnum = "LimitExceededException"
	BatchWriteExceptionTypeEnumUnsupportedIndexTypeException    BatchWriteExceptionTypeEnum = "UnsupportedIndexTypeException"
)
