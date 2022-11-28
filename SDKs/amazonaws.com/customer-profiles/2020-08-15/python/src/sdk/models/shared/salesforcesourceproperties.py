from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SalesforceSourceProperties:
    r"""SalesforceSourceProperties
    The properties that are applied when Salesforce is being used as a source.
    """
    
    object: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Object') }})
    enable_dynamic_field_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableDynamicFieldUpdate') }})
    include_deleted_records: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeDeletedRecords') }})
    
