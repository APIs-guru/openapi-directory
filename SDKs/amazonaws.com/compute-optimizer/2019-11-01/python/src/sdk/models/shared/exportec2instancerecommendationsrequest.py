from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExportEc2InstanceRecommendationsRequest:
    s3_destination_config: S3DestinationConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3DestinationConfig') }})
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountIds') }})
    fields_to_export: Optional[List[ExportableInstanceFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldsToExport') }})
    file_format: Optional[FileFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileFormat') }})
    filters: Optional[List[Filter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    include_member_accounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeMemberAccounts') }})
    recommendation_preferences: Optional[RecommendationPreferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationPreferences') }})
    
