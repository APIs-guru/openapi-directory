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
class UpdateUserAttributesResponse:
    r"""UpdateUserAttributesResponse
    Represents the response from the server for the request to update user attributes.
    """
    
    code_delivery_details_list: Optional[List[CodeDeliveryDetailsType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeDeliveryDetailsList') }})
    
