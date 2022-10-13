from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReferencedImageDetail:
    artifact_media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactMediaType' }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageDigest' }})
    image_manifest_media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageManifestMediaType' }})
    image_pushed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePushedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    image_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageSizeInBytes' }})
    
