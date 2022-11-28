from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventIntegrationAssociation:
    r"""EventIntegrationAssociation
    The event integration association.
    """
    
    client_association_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientAssociationMetadata') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    event_bridge_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBridgeRuleName') }})
    event_integration_association_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventIntegrationAssociationArn') }})
    event_integration_association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventIntegrationAssociationId') }})
    event_integration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventIntegrationName') }})
    
