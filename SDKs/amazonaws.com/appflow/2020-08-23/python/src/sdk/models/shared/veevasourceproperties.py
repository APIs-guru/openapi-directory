from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VeevaSourceProperties:
    r"""VeevaSourceProperties
     The properties that are applied when using Veeva as a flow source. 
    """
    
    object: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    document_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentType') }})
    include_all_versions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeAllVersions') }})
    include_renditions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeRenditions') }})
    include_source_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeSourceFiles') }})
    
