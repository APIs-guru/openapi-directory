from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterContainerInstanceRequest:
    attributes: Optional[List[Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    container_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstanceArn') }})
    instance_identity_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceIdentityDocument') }})
    instance_identity_document_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceIdentityDocumentSignature') }})
    platform_devices: Optional[List[PlatformDevice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformDevices') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    total_resources: Optional[List[Resource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResources') }})
    version_info: Optional[VersionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionInfo') }})
    
