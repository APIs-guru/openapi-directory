from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagescanfinding


@dataclass_json
@dataclass
class ImageScanFindings:
    finding_severity_counts: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingSeverityCounts' }})
    findings: Optional[List[imagescanfinding.ImageScanFinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findings' }})
    image_scan_completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageScanCompletedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    vulnerability_source_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerabilitySourceUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
