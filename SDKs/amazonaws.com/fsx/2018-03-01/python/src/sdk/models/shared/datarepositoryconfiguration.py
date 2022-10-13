from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import autoimportpolicytype_enum
from . import datarepositoryfailuredetails
from . import datarepositorylifecycle_enum


@dataclass_json
@dataclass
class DataRepositoryConfiguration:
    auto_import_policy: Optional[autoimportpolicytype_enum.AutoImportPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoImportPolicy' }})
    export_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportPath' }})
    failure_details: Optional[datarepositoryfailuredetails.DataRepositoryFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureDetails' }})
    import_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportPath' }})
    imported_file_chunk_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportedFileChunkSize' }})
    lifecycle: Optional[datarepositorylifecycle_enum.DataRepositoryLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lifecycle' }})
    
