from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import accesspreview


@dataclass_json
@dataclass
class GetAccessPreviewResponse:
    access_preview: accesspreview.AccessPreview = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPreview' }})
    
