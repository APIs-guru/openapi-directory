from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import exportablelambdafunctionfield_enum
from . import fileformat_enum
from . import lambdafunctionrecommendationfilter
from . import s3destinationconfig


@dataclass_json
@dataclass
class ExportLambdaFunctionRecommendationsRequest:
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountIds' }})
    fields_to_export: Optional[List[exportablelambdafunctionfield_enum.ExportableLambdaFunctionFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldsToExport' }})
    file_format: Optional[fileformat_enum.FileFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileFormat' }})
    filters: Optional[List[lambdafunctionrecommendationfilter.LambdaFunctionRecommendationFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    include_member_accounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeMemberAccounts' }})
    s3_destination_config: s3destinationconfig.S3DestinationConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3DestinationConfig' }})
    
