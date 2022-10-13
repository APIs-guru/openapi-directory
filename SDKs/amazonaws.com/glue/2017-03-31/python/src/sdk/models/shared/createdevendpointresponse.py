from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import workertype_enum


@dataclass_json
@dataclass
class CreateDevEndpointResponse:
    arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arguments' }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    created_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointName' }})
    extra_jars_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtraJarsS3Path' }})
    extra_python_libs_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtraPythonLibsS3Path' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    glue_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlueVersion' }})
    number_of_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfNodes' }})
    number_of_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfWorkers' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfiguration' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    worker_type: Optional[workertype_enum.WorkerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerType' }})
    yarn_endpoint_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'YarnEndpointAddress' }})
    zeppelin_remote_spark_interpreter_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZeppelinRemoteSparkInterpreterPort' }})
    
