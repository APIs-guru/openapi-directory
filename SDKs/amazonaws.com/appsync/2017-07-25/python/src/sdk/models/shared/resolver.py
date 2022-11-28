from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Resolver:
    r"""Resolver
    Describes a resolver.
    """
    
    caching_config: Optional[CachingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cachingConfig') }})
    data_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceName') }})
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    kind: Optional[ResolverKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    pipeline_config: Optional[PipelineConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineConfig') }})
    request_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMappingTemplate') }})
    resolver_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolverArn') }})
    response_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseMappingTemplate') }})
    sync_config: Optional[SyncConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncConfig') }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeName') }})
    
