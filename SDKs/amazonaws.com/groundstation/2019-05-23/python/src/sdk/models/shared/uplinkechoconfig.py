from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UplinkEchoConfig:
    antenna_uplink_config_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaUplinkConfigArn' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    
