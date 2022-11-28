from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateItemOutput:
    r"""UpdateItemOutput
    Represents the output of an <code>UpdateItem</code> operation.
    """
    
    attributes: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    consumed_capacity: Optional[ConsumedCapacity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedCapacity') }})
    item_collection_metrics: Optional[ItemCollectionMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemCollectionMetrics') }})
    
