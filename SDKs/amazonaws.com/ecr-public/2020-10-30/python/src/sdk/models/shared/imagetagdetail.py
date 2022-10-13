from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import referencedimagedetail


@dataclass_json
@dataclass
class ImageTagDetail:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    image_detail: Optional[referencedimagedetail.ReferencedImageDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageDetail' }})
    image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTag' }})
    
