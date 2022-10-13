from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import exportablevolumefield_enum
from . import fileformat_enum
from . import ebsfilter
from . import s3destinationconfig


@dataclass_json
@dataclass
class ExportEbsVolumeRecommendationsRequest:
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountIds' }})
    fields_to_export: Optional[List[exportablevolumefield_enum.ExportableVolumeFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldsToExport' }})
    file_format: Optional[fileformat_enum.FileFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileFormat' }})
    filters: Optional[List[ebsfilter.EbsFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    include_member_accounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeMemberAccounts' }})
    s3_destination_config: s3destinationconfig.S3DestinationConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3DestinationConfig' }})
    
