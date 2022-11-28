from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegisterEventTopicRequest:
    r"""RegisterEventTopicRequest
    Registers a new event topic.
    """
    
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    topic_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicName') }})
    
