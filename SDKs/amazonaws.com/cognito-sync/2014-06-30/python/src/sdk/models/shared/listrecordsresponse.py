from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import record


@dataclass_json
@dataclass
class ListRecordsResponse:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    dataset_deleted_after_requested_sync_count: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetDeletedAfterRequestedSyncCount' }})
    dataset_exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetExists' }})
    dataset_sync_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetSyncCount' }})
    last_modified_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    merged_dataset_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MergedDatasetNames' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    records: Optional[List[record.Record]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Records' }})
    sync_session_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncSessionToken' }})
    
