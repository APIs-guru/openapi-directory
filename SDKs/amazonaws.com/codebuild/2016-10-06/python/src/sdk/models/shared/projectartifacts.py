from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import bucketowneraccess_enum
from . import artifactnamespace_enum
from . import artifactpackaging_enum
from . import artifactstype_enum


@dataclass_json
@dataclass
class ProjectArtifacts:
    artifact_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactIdentifier' }})
    bucket_owner_access: Optional[bucketowneraccess_enum.BucketOwnerAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketOwnerAccess' }})
    encryption_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionDisabled' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    namespace_type: Optional[artifactnamespace_enum.ArtifactNamespaceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceType' }})
    override_artifact_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrideArtifactName' }})
    packaging: Optional[artifactpackaging_enum.ArtifactPackagingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packaging' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    type: artifactstype_enum.ArtifactsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
