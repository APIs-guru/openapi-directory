from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRecordsResponse:
    r"""ListRecordsResponse
    Returned for a successful ListRecordsRequest.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    dataset_deleted_after_requested_sync_count: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetDeletedAfterRequestedSyncCount') }})
    dataset_exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetExists') }})
    dataset_sync_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetSyncCount') }})
    last_modified_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedBy') }})
    merged_dataset_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MergedDatasetNames') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    records: Optional[List[Record]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    sync_session_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncSessionToken') }})
    
