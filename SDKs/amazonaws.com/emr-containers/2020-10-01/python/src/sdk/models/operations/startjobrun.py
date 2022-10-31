from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartJobRunPathParams:
    virtual_cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'virtualClusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartJobRunHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class StartJobRunRequestBodyConfigurationOverrides:
    application_configuration: Optional[List[shared.Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationConfiguration' }})
    monitoring_configuration: Optional[shared.MonitoringConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoringConfiguration' }})
    

@dataclass_json
@dataclass
class StartJobRunRequestBodyJobDriver:
    spark_submit_job_driver: Optional[shared.SparkSubmitJobDriver] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkSubmitJobDriver' }})
    

@dataclass_json
@dataclass
class StartJobRunRequestBody:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    configuration_overrides: Optional[StartJobRunRequestBodyConfigurationOverrides] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationOverrides' }})
    execution_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionRoleArn' }})
    job_driver: StartJobRunRequestBodyJobDriver = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDriver' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    release_label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseLabel' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class StartJobRunRequest:
    path_params: StartJobRunPathParams = field(default=None)
    headers: StartJobRunHeaders = field(default=None)
    request: StartJobRunRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartJobRunResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    start_job_run_response: Optional[shared.StartJobRunResponse] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
