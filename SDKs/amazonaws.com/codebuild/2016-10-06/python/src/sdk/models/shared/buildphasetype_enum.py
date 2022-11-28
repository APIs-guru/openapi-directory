from dataclasses import dataclass, field
from enum import Enum

class BuildPhaseTypeEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    QUEUED = "QUEUED"
    PROVISIONING = "PROVISIONING"
    DOWNLOAD_SOURCE = "DOWNLOAD_SOURCE"
    INSTALL = "INSTALL"
    PRE_BUILD = "PRE_BUILD"
    BUILD = "BUILD"
    POST_BUILD = "POST_BUILD"
    UPLOAD_ARTIFACTS = "UPLOAD_ARTIFACTS"
    FINALIZING = "FINALIZING"
    COMPLETED = "COMPLETED"

