from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImagePackage:
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    package_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageVersion' }})
    
