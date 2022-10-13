from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import actiontypeexecutor
from . import actiontypeidentifier
from . import actiontypeartifactdetails
from . import actiontypeartifactdetails
from . import actiontypepermissions
from . import actiontypeurls


@dataclass_json
@dataclass
class ActionTypeDeclaration:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    executor: actiontypeexecutor.ActionTypeExecutor = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executor' }})
    id: actiontypeidentifier.ActionTypeIdentifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    input_artifact_details: actiontypeartifactdetails.ActionTypeArtifactDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputArtifactDetails' }})
    output_artifact_details: actiontypeartifactdetails.ActionTypeArtifactDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputArtifactDetails' }})
    permissions: Optional[actiontypepermissions.ActionTypePermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    urls: Optional[actiontypeurls.ActionTypeUrls] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urls' }})
    
