from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord:
    bundle_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BundleNumber') }})
    client_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientCount') }})
    release_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReleaseName') }})
    
