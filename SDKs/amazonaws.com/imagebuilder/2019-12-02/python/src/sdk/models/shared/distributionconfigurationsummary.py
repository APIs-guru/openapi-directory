from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DistributionConfigurationSummary:
    r"""DistributionConfigurationSummary
    A high-level overview of a distribution configuration.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateUpdated') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
