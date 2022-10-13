from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DevEndpointCustomLibraries:
    extra_jars_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtraJarsS3Path' }})
    extra_python_libs_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtraPythonLibsS3Path' }})
    
