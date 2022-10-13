from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attribute
from . import platformdevice
from . import tag
from . import resource
from . import versioninfo


@dataclass_json
@dataclass
class RegisterContainerInstanceRequest:
    attributes: Optional[List[attribute.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    container_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerInstanceArn' }})
    instance_identity_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceIdentityDocument' }})
    instance_identity_document_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceIdentityDocumentSignature' }})
    platform_devices: Optional[List[platformdevice.PlatformDevice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformDevices' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    total_resources: Optional[List[resource.Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResources' }})
    version_info: Optional[versioninfo.VersionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionInfo' }})
    
