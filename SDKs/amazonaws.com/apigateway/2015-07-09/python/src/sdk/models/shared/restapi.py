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
class RestAPI:
    r"""RestAPI
    <p>Represents a REST API.</p> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html\">Create an API</a> </div>
    """
    
    api_key_source: Optional[APIKeySourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeySource') }})
    binary_media_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryMediaTypes') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disable_execute_api_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableExecuteApiEndpoint') }})
    endpoint_configuration: Optional[EndpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointConfiguration') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    minimum_compression_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumCompressionSize') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
