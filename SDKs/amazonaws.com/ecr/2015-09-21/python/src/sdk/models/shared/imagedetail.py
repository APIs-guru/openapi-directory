from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageDetail:
    r"""ImageDetail
    An object that describes an image returned by a <a>DescribeImages</a> operation.
    """
    
    artifact_media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactMediaType') }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageDigest') }})
    image_manifest_media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageManifestMediaType') }})
    image_pushed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePushedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    image_scan_findings_summary: Optional[ImageScanFindingsSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageScanFindingsSummary') }})
    image_scan_status: Optional[ImageScanStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageScanStatus') }})
    image_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageSizeInBytes') }})
    image_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTags') }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
