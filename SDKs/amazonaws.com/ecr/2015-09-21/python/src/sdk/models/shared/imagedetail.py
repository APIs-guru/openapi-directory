from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagescanfindingssummary
from . import imagescanstatus


@dataclass_json
@dataclass
class ImageDetail:
    artifact_media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactMediaType' }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageDigest' }})
    image_manifest_media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageManifestMediaType' }})
    image_pushed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePushedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    image_scan_findings_summary: Optional[imagescanfindingssummary.ImageScanFindingsSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageScanFindingsSummary' }})
    image_scan_status: Optional[imagescanstatus.ImageScanStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageScanStatus' }})
    image_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageSizeInBytes' }})
    image_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTags' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
