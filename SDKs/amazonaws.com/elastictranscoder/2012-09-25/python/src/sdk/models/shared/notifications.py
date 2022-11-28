from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Notifications:
    r"""Notifications
    <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
    """
    
    completed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Completed') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    progressing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Progressing') }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warning') }})
    
