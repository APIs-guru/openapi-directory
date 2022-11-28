from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class StartJobRunPathParams:
    virtual_cluster_id: str = field(metadata={'path_param': { 'field_name': 'virtualClusterId', 'style': 'simple', 'explode': False }})
    

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
    r"""StartJobRunRequestBodyConfigurationOverrides
    A configuration specification to be used to override existing configurations.
    """
    
    application_configuration: Optional[List[shared.Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationConfiguration') }})
    monitoring_configuration: Optional[shared.MonitoringConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoringConfiguration') }})
    

@dataclass_json
@dataclass
class StartJobRunRequestBodyJobDriver:
    r"""StartJobRunRequestBodyJobDriver
    Specify the driver that the job runs on.
    """
    
    spark_submit_job_driver: Optional[shared.SparkSubmitJobDriver] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkSubmitJobDriver') }})
    

@dataclass_json
@dataclass
class StartJobRunRequestBody:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    execution_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    job_driver: StartJobRunRequestBodyJobDriver = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDriver') }})
    release_label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseLabel') }})
    configuration_overrides: Optional[StartJobRunRequestBodyConfigurationOverrides] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationOverrides') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class StartJobRunRequest:
    headers: StartJobRunHeaders = field()
    path_params: StartJobRunPathParams = field()
    request: StartJobRunRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartJobRunResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    start_job_run_response: Optional[shared.StartJobRunResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
