from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import kmskeydetails
from . import providertype_enum
from . import s3repositorydetails
from . import repositoryassociationstate_enum


@dataclass_json
@dataclass
class RepositoryAssociation:
    association_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationArn' }})
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    connection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionArn' }})
    created_time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTimeStamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kms_key_details: Optional[kmskeydetails.KmsKeyDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSKeyDetails' }})
    last_updated_time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTimeStamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    provider_type: Optional[providertype_enum.ProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderType' }})
    s3_repository_details: Optional[s3repositorydetails.S3RepositoryDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3RepositoryDetails' }})
    state: Optional[repositoryassociationstate_enum.RepositoryAssociationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateReason' }})
    
