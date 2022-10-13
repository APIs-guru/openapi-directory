from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import configurationitemstatus_enum
from . import relationship
from . import resourcetype_enum


@dataclass_json
@dataclass
class ConfigurationItem:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityZone' }})
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsRegion' }})
    configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    configuration_item_capture_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationItemCaptureTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    configuration_item_md5_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationItemMD5Hash' }})
    configuration_item_status: Optional[configurationitemstatus_enum.ConfigurationItemStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationItemStatus' }})
    configuration_state_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationStateId' }})
    related_events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedEvents' }})
    relationships: Optional[List[relationship.Relationship]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    resource_creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceCreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    supplementary_configuration: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplementaryConfiguration' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
