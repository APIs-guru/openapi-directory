from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class InitiateJobPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    vault_name: str = field(default=None, metadata={'path_param': { 'field_name': 'vaultName', 'style': 'simple', 'explode': False }})
    

@dataclass
class InitiateJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class InitiateJobRequestBodyJobParameters:
    archive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchiveId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    inventory_retrieval_parameters: Optional[shared.InventoryRetrievalJobInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InventoryRetrievalParameters' }})
    output_location: Optional[shared.OutputLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputLocation' }})
    retrieval_byte_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetrievalByteRange' }})
    sns_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SNSTopic' }})
    select_parameters: Optional[shared.SelectParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectParameters' }})
    tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tier' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class InitiateJobRequestBody:
    job_parameters: Optional[InitiateJobRequestBodyJobParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobParameters' }})
    

@dataclass
class InitiateJobRequest:
    path_params: InitiateJobPathParams = field(default=None)
    headers: InitiateJobHeaders = field(default=None)
    request: InitiateJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InitiateJobResponse:
    content_type: str = field(default=None)
    initiate_job_output: Optional[dict[str, Any]] = field(default=None)
    insufficient_capacity_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    missing_parameter_value_exception: Optional[Any] = field(default=None)
    policy_enforced_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
