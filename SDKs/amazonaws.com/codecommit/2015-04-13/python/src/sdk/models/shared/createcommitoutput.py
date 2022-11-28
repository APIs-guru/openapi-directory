from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCommitOutput:
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitId') }})
    files_added: Optional[List[FileMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesAdded') }})
    files_deleted: Optional[List[FileMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesDeleted') }})
    files_updated: Optional[List[FileMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesUpdated') }})
    tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treeId') }})
    
