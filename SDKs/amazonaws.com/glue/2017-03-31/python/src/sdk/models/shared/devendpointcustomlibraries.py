from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DevEndpointCustomLibraries:
    r"""DevEndpointCustomLibraries
    Custom libraries to be loaded into a development endpoint.
    """
    
    extra_jars_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtraJarsS3Path') }})
    extra_python_libs_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtraPythonLibsS3Path') }})
    
