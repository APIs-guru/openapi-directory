from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagepackage


@dataclass_json
@dataclass
class ListImagePackagesResponse:
    image_package_list: Optional[List[imagepackage.ImagePackage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePackageList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
