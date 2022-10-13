from dataclasses import dataclass, field
from typing import Enum,List

class BatchReadExceptionTypeEnum(str, Enum):
    VALIDATION_EXCEPTION = "ValidationException"
    INVALID_ARN_EXCEPTION = "InvalidArnException"
    RESOURCE_NOT_FOUND_EXCEPTION = "ResourceNotFoundException"
    INVALID_NEXT_TOKEN_EXCEPTION = "InvalidNextTokenException"
    ACCESS_DENIED_EXCEPTION = "AccessDeniedException"
    NOT_NODE_EXCEPTION = "NotNodeException"
    FACET_VALIDATION_EXCEPTION = "FacetValidationException"
    CANNOT_LIST_PARENT_OF_ROOT_EXCEPTION = "CannotListParentOfRootException"
    NOT_INDEX_EXCEPTION = "NotIndexException"
    NOT_POLICY_EXCEPTION = "NotPolicyException"
    DIRECTORY_NOT_ENABLED_EXCEPTION = "DirectoryNotEnabledException"
    LIMIT_EXCEEDED_EXCEPTION = "LimitExceededException"
    INTERNAL_SERVICE_EXCEPTION = "InternalServiceException"

