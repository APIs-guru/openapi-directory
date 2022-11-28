from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DirectoryDescription:
    r"""DirectoryDescription
    Contains information about an Directory Service directory.
    """
    
    access_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessUrl') }})
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alias') }})
    connect_settings: Optional[DirectoryConnectSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectSettings') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    desired_number_of_domain_controllers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredNumberOfDomainControllers') }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    dns_ip_addrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIpAddrs') }})
    edition: Optional[DirectoryEditionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Edition') }})
    launch_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner_directory_description: Optional[OwnerDirectoryDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerDirectoryDescription') }})
    radius_settings: Optional[RadiusSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusSettings') }})
    radius_status: Optional[RadiusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusStatus') }})
    regions_info: Optional[RegionsInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionsInfo') }})
    share_method: Optional[ShareMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareMethod') }})
    share_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareNotes') }})
    share_status: Optional[ShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareStatus') }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShortName') }})
    size: Optional[DirectorySizeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    sso_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SsoEnabled') }})
    stage: Optional[DirectoryStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stage') }})
    stage_last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StageLastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stage_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StageReason') }})
    type: Optional[DirectoryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    vpc_settings: Optional[DirectoryVpcSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSettings') }})
    
