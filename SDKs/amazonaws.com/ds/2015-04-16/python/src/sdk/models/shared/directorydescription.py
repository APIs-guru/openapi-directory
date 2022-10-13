from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import directoryconnectsettingsdescription
from . import directoryedition_enum
from . import ownerdirectorydescription
from . import radiussettings
from . import radiusstatus_enum
from . import regionsinfo
from . import sharemethod_enum
from . import sharestatus_enum
from . import directorysize_enum
from . import directorystage_enum
from . import directorytype_enum
from . import directoryvpcsettingsdescription


@dataclass_json
@dataclass
class DirectoryDescription:
    access_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessUrl' }})
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Alias' }})
    connect_settings: Optional[directoryconnectsettingsdescription.DirectoryConnectSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectSettings' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    desired_number_of_domain_controllers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredNumberOfDomainControllers' }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    dns_ip_addrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsIpAddrs' }})
    edition: Optional[directoryedition_enum.DirectoryEditionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Edition' }})
    launch_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner_directory_description: Optional[ownerdirectorydescription.OwnerDirectoryDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerDirectoryDescription' }})
    radius_settings: Optional[radiussettings.RadiusSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RadiusSettings' }})
    radius_status: Optional[radiusstatus_enum.RadiusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RadiusStatus' }})
    regions_info: Optional[regionsinfo.RegionsInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionsInfo' }})
    share_method: Optional[sharemethod_enum.ShareMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareMethod' }})
    share_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareNotes' }})
    share_status: Optional[sharestatus_enum.ShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareStatus' }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShortName' }})
    size: Optional[directorysize_enum.DirectorySizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    sso_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SsoEnabled' }})
    stage: Optional[directorystage_enum.DirectoryStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Stage' }})
    stage_last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StageLastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stage_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StageReason' }})
    type: Optional[directorytype_enum.DirectoryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    vpc_settings: Optional[directoryvpcsettingsdescription.DirectoryVpcSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcSettings' }})
    
