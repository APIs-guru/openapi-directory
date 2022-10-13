from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import providertype_enum
from . import repositoryassociationstate_enum


@dataclass_json
@dataclass
class RepositoryAssociationSummary:
    association_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationArn' }})
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    connection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionArn' }})
    last_updated_time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTimeStamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    provider_type: Optional[providertype_enum.ProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderType' }})
    state: Optional[repositoryassociationstate_enum.RepositoryAssociationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
