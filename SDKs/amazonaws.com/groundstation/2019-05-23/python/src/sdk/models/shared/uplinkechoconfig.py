from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UplinkEchoConfig:
    r"""UplinkEchoConfig
    <p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>
    """
    
    antenna_uplink_config_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaUplinkConfigArn') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
