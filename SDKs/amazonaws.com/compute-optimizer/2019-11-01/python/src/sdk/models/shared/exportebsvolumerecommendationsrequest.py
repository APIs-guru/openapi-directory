from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExportEbsVolumeRecommendationsRequest:
    s3_destination_config: S3DestinationConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3DestinationConfig') }})
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountIds') }})
    fields_to_export: Optional[List[ExportableVolumeFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldsToExport') }})
    file_format: Optional[FileFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileFormat') }})
    filters: Optional[List[EbsFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    include_member_accounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeMemberAccounts') }})
    
