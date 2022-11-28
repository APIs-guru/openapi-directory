from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserDefinedFunctionInput:
    r"""UserDefinedFunctionInput
    A structure used to create or update a user-defined function.
    """
    
    class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClassName') }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionName') }})
    owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerName') }})
    owner_type: Optional[PrincipalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerType') }})
    resource_uris: Optional[List[ResourceURI]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceUris') }})
    
