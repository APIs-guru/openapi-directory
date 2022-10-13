from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import storageconnectortype_enum


@dataclass_json
@dataclass
class StorageConnector:
    connector_type: storageconnectortype_enum.StorageConnectorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectorType' }})
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domains' }})
    resource_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceIdentifier' }})
    
