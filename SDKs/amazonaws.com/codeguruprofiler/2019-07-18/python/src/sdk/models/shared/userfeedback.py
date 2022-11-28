from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserFeedback:
    r"""UserFeedback
    Feedback that can be submitted for each instance of an anomaly by the user. Feedback is be used for improvements in generating recommendations for the application.
    """
    
    type: FeedbackTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
