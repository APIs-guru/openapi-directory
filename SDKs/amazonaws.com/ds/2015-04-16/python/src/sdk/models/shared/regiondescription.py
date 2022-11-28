from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegionDescription:
    r"""RegionDescription
    The replicated Region information for a directory.
    """
    
    desired_number_of_domain_controllers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredNumberOfDomainControllers') }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    launch_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionName') }})
    region_type: Optional[RegionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionType') }})
    status: Optional[DirectoryStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusLastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    vpc_settings: Optional[DirectoryVpcSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSettings') }})
    
