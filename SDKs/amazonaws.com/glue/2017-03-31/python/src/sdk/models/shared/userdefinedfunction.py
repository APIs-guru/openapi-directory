from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import principaltype_enum
from . import resourceuri


@dataclass_json
@dataclass
class UserDefinedFunction:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClassName' }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionName' }})
    owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerName' }})
    owner_type: Optional[principaltype_enum.PrincipalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerType' }})
    resource_uris: Optional[List[resourceuri.ResourceURI]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceUris' }})
    
