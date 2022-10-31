from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateInfrastructureConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateInfrastructureConfigurationRequestBodyLogging:
    s3_logs: Optional[shared.S3Logs] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Logs' }})
    

@dataclass_json
@dataclass
class CreateInfrastructureConfigurationRequestBody:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    instance_profile_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceProfileName' }})
    instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceTypes' }})
    key_pair: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPair' }})
    logging: Optional[CreateInfrastructureConfigurationRequestBodyLogging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logging' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceTags' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroupIds' }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snsTopicArn' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    terminate_instance_on_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terminateInstanceOnFailure' }})
    

@dataclass
class CreateInfrastructureConfigurationRequest:
    headers: CreateInfrastructureConfigurationHeaders = field(default=None)
    request: CreateInfrastructureConfigurationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateInfrastructureConfigurationResponse:
    call_rate_limit_exceeded_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_infrastructure_configuration_response: Optional[shared.CreateInfrastructureConfigurationResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
