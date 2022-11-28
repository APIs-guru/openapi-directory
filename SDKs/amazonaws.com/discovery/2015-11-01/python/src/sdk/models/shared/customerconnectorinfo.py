from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomerConnectorInfo:
    r"""CustomerConnectorInfo
    Inventory data for installed discovery connectors.
    """
    
    active_connectors: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeConnectors') }})
    black_listed_connectors: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blackListedConnectors') }})
    healthy_connectors: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthyConnectors') }})
    shutdown_connectors: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shutdownConnectors') }})
    total_connectors: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalConnectors') }})
    unhealthy_connectors: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unhealthyConnectors') }})
    unknown_connectors: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknownConnectors') }})
    
