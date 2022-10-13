from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSoftwareUpdateJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amzn_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-Client-Token' }})
    
class CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum(str, Enum):
    CORE = "core"
    OTA_AGENT = "ota_agent"

class CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum(str, Enum):
    NONE = "NONE"
    TRACE = "TRACE"
    DEBUG = "DEBUG"
    VERBOSE = "VERBOSE"
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"
    FATAL = "FATAL"

class CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum(str, Enum):
    ARMV6L = "armv6l"
    ARMV7L = "armv7l"
    X86_64 = "x86_64"
    AARCH64 = "aarch64"

class CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum(str, Enum):
    UBUNTU = "ubuntu"
    RASPBIAN = "raspbian"
    AMAZON_LINUX = "amazon_linux"
    OPENWRT = "openwrt"


@dataclass_json
@dataclass
class CreateSoftwareUpdateJobRequestBody:
    s3_url_signer_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3UrlSignerRole' }})
    software_to_update: CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SoftwareToUpdate' }})
    update_agent_log_level: Optional[CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateAgentLogLevel' }})
    update_targets: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateTargets' }})
    update_targets_architecture: CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateTargetsArchitecture' }})
    update_targets_operating_system: CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateTargetsOperatingSystem' }})
    

@dataclass
class CreateSoftwareUpdateJobRequest:
    headers: CreateSoftwareUpdateJobHeaders = field(default=None)
    request: CreateSoftwareUpdateJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSoftwareUpdateJobResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_software_update_job_response: Optional[shared.CreateSoftwareUpdateJobResponse] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
