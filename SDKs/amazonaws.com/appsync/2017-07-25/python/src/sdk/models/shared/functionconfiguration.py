from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import syncconfig


@dataclass_json
@dataclass
class FunctionConfiguration:
    data_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionArn' }})
    function_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionId' }})
    function_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    request_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMappingTemplate' }})
    response_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseMappingTemplate' }})
    sync_config: Optional[syncconfig.SyncConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncConfig' }})
    
