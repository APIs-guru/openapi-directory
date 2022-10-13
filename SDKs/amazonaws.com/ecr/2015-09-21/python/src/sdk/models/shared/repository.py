from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptionconfiguration
from . import imagescanningconfiguration
from . import imagetagmutability_enum


@dataclass_json
@dataclass
class Repository:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    encryption_configuration: Optional[encryptionconfiguration.EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfiguration' }})
    image_scanning_configuration: Optional[imagescanningconfiguration.ImageScanningConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageScanningConfiguration' }})
    image_tag_mutability: Optional[imagetagmutability_enum.ImageTagMutabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTagMutability' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryArn' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    repository_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryUri' }})
    
