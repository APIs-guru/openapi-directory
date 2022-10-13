from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import assessmentreportdestinationtype_enum


@dataclass_json
@dataclass
class AssessmentReportsDestination:
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    destination_type: Optional[assessmentreportdestinationtype_enum.AssessmentReportDestinationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationType' }})
    
