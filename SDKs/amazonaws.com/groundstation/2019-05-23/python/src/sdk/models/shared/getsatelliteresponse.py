from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetSatelliteResponse:
    r"""GetSatelliteResponse
    <p/>
    """
    
    ground_stations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groundStations') }})
    norad_satellite_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noradSatelliteID') }})
    satellite_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satelliteArn') }})
    satellite_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satelliteId') }})
    
