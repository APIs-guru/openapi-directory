from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestConnectionMessage:
    r"""TestConnectionMessage
    <p/>
    """
    
    endpoint_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointArn') }})
    replication_instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceArn') }})
    
