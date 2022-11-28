from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ControlComment:
    r"""ControlComment
     A comment posted by a user on a control. This includes the author's name, the comment text, and a timestamp. 
    """
    
    author_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorName') }})
    comment_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentBody') }})
    posted_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
