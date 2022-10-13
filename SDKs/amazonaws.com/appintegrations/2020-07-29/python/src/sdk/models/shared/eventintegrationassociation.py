from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventIntegrationAssociation:
    client_association_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientAssociationMetadata' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    event_bridge_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBridgeRuleName' }})
    event_integration_association_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventIntegrationAssociationArn' }})
    event_integration_association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventIntegrationAssociationId' }})
    event_integration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventIntegrationName' }})
    
