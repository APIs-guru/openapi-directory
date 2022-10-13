from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cachingconfig
from . import resolverkind_enum
from . import pipelineconfig
from . import syncconfig


@dataclass_json
@dataclass
class Resolver:
    caching_config: Optional[cachingconfig.CachingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cachingConfig' }})
    data_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceName' }})
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldName' }})
    kind: Optional[resolverkind_enum.ResolverKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    pipeline_config: Optional[pipelineconfig.PipelineConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineConfig' }})
    request_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMappingTemplate' }})
    resolver_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolverArn' }})
    response_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseMappingTemplate' }})
    sync_config: Optional[syncconfig.SyncConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncConfig' }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeName' }})
    
