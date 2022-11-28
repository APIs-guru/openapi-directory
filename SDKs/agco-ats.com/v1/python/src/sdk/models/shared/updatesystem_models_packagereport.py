from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateSystemModelsPackageReport:
    categories: Optional[List[UpdateSystemModelsCategory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Categories') }})
    package_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageDescription') }})
    package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageID') }})
    
