from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProgressUpdateStreamSummary:
    r"""ProgressUpdateStreamSummary
    Summary of the AWS resource used for access control that is implicitly linked to your AWS account.
    """
    
    progress_update_stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressUpdateStreamName') }})
    
