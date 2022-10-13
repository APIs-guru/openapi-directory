from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImageScanFindingsSummary:
    finding_severity_counts: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingSeverityCounts' }})
    image_scan_completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageScanCompletedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    vulnerability_source_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerabilitySourceUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
