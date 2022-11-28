from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProjectArtifacts:
    r"""ProjectArtifacts
    Information about the build output artifacts for the build project.
    """
    
    type: ArtifactsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    artifact_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactIdentifier') }})
    bucket_owner_access: Optional[BucketOwnerAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketOwnerAccess') }})
    encryption_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionDisabled') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    namespace_type: Optional[ArtifactNamespaceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceType') }})
    override_artifact_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideArtifactName') }})
    packaging: Optional[ArtifactPackagingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packaging') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    
