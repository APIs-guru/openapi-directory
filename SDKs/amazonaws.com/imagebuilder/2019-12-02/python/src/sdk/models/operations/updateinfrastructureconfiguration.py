from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateInfrastructureConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateInfrastructureConfigurationRequestBodyLogging:
    r"""UpdateInfrastructureConfigurationRequestBodyLogging
    Logging configuration defines where Image Builder uploads your logs.
    """
    
    s3_logs: Optional[shared.S3Logs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Logs') }})
    

@dataclass_json
@dataclass
class UpdateInfrastructureConfigurationRequestBody:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    infrastructure_configuration_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureConfigurationArn') }})
    instance_profile_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceProfileName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTypes') }})
    key_pair: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPair') }})
    logging: Optional[UpdateInfrastructureConfigurationRequestBodyLogging] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    resource_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceTags') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroupIds') }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snsTopicArn') }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetId') }})
    terminate_instance_on_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminateInstanceOnFailure') }})
    

@dataclass
class UpdateInfrastructureConfigurationRequest:
    headers: UpdateInfrastructureConfigurationHeaders = field()
    request: UpdateInfrastructureConfigurationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateInfrastructureConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    call_rate_limit_exceeded_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    update_infrastructure_configuration_response: Optional[shared.UpdateInfrastructureConfigurationResponse] = field(default=None)
    
