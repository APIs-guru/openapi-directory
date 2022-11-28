from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GroundStationData:
    r"""GroundStationData
    Information about the ground station data.
    """
    
    ground_station_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groundStationId') }})
    ground_station_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groundStationName') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
