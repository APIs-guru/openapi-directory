from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import workertype_enum


@dataclass_json
@dataclass
class CreateDevEndpointRequest:
    arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arguments' }})
    endpoint_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointName' }})
    extra_jars_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtraJarsS3Path' }})
    extra_python_libs_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtraPythonLibsS3Path' }})
    glue_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlueVersion' }})
    number_of_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfNodes' }})
    number_of_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfWorkers' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicKey' }})
    public_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicKeys' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfiguration' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    worker_type: Optional[workertype_enum.WorkerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerType' }})
    
