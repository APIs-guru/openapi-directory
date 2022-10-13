from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import exportableautoscalinggroupfield_enum
from . import fileformat_enum
from . import filter
from . import recommendationpreferences
from . import s3destinationconfig


@dataclass_json
@dataclass
class ExportAutoScalingGroupRecommendationsRequest:
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountIds' }})
    fields_to_export: Optional[List[exportableautoscalinggroupfield_enum.ExportableAutoScalingGroupFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldsToExport' }})
    file_format: Optional[fileformat_enum.FileFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileFormat' }})
    filters: Optional[List[filter.Filter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    include_member_accounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeMemberAccounts' }})
    recommendation_preferences: Optional[recommendationpreferences.RecommendationPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationPreferences' }})
    s3_destination_config: s3destinationconfig.S3DestinationConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3DestinationConfig' }})
    
