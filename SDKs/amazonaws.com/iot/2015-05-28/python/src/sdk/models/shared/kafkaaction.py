from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KafkaAction:
    r"""KafkaAction
    Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
    """
    
    client_properties: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientProperties') }})
    destination_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationArn') }})
    topic: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    partition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partition') }})
    
