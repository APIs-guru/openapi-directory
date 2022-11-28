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
class UpdateDevEndpointRequest:
    endpoint_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointName') }})
    add_arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddArguments') }})
    add_public_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddPublicKeys') }})
    custom_libraries: Optional[DevEndpointCustomLibraries] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomLibraries') }})
    delete_arguments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteArguments') }})
    delete_public_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletePublicKeys') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicKey') }})
    update_etl_libraries: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateEtlLibraries') }})
    
