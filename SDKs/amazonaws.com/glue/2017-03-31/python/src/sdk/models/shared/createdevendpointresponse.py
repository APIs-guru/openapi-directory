from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDevEndpointResponse:
    arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arguments') }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    created_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointName') }})
    extra_jars_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtraJarsS3Path') }})
    extra_python_libs_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtraPythonLibsS3Path') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    glue_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlueVersion') }})
    number_of_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfNodes') }})
    number_of_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfWorkers') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityConfiguration') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    worker_type: Optional[WorkerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerType') }})
    yarn_endpoint_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('YarnEndpointAddress') }})
    zeppelin_remote_spark_interpreter_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZeppelinRemoteSparkInterpreterPort') }})
    
