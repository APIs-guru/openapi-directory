from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import regiontype_enum
from . import directorystage_enum
from . import directoryvpcsettings


@dataclass_json
@dataclass
class RegionDescription:
    desired_number_of_domain_controllers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredNumberOfDomainControllers' }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    launch_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionName' }})
    region_type: Optional[regiontype_enum.RegionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionType' }})
    status: Optional[directorystage_enum.DirectoryStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusLastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    vpc_settings: Optional[directoryvpcsettings.DirectoryVpcSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcSettings' }})
    
