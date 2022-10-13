from dataclasses import dataclass, field
from typing import Enum

class BatchWriteExceptionTypeEnum(str, Enum):
    INTERNAL_SERVICE_EXCEPTION = "InternalServiceException"
    VALIDATION_EXCEPTION = "ValidationException"
    INVALID_ARN_EXCEPTION = "InvalidArnException"
    LINK_NAME_ALREADY_IN_USE_EXCEPTION = "LinkNameAlreadyInUseException"
    STILL_CONTAINS_LINKS_EXCEPTION = "StillContainsLinksException"
    FACET_VALIDATION_EXCEPTION = "FacetValidationException"
    OBJECT_NOT_DETACHED_EXCEPTION = "ObjectNotDetachedException"
    RESOURCE_NOT_FOUND_EXCEPTION = "ResourceNotFoundException"
    ACCESS_DENIED_EXCEPTION = "AccessDeniedException"
    INVALID_ATTACHMENT_EXCEPTION = "InvalidAttachmentException"
    NOT_INDEX_EXCEPTION = "NotIndexException"
    NOT_NODE_EXCEPTION = "NotNodeException"
    INDEXED_ATTRIBUTE_MISSING_EXCEPTION = "IndexedAttributeMissingException"
    OBJECT_ALREADY_DETACHED_EXCEPTION = "ObjectAlreadyDetachedException"
    NOT_POLICY_EXCEPTION = "NotPolicyException"
    DIRECTORY_NOT_ENABLED_EXCEPTION = "DirectoryNotEnabledException"
    LIMIT_EXCEEDED_EXCEPTION = "LimitExceededException"
    UNSUPPORTED_INDEX_TYPE_EXCEPTION = "UnsupportedIndexTypeException"

