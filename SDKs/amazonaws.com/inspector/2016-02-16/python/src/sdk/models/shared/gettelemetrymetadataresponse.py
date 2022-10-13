from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import telemetrymetadata


@dataclass_json
@dataclass
class GetTelemetryMetadataResponse:
    telemetry_metadata: List[telemetrymetadata.TelemetryMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telemetryMetadata' }})
    
