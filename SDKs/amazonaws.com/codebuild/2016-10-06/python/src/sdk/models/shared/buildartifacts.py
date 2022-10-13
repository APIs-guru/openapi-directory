from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import bucketowneraccess_enum


@dataclass_json
@dataclass
class BuildArtifacts:
    artifact_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactIdentifier' }})
    bucket_owner_access: Optional[bucketowneraccess_enum.BucketOwnerAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketOwnerAccess' }})
    encryption_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionDisabled' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    md5sum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'md5sum' }})
    override_artifact_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrideArtifactName' }})
    sha256sum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha256sum' }})
    
