from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import backupdetails
from . import sourcetabledetails
from . import sourcetablefeaturedetails


@dataclass_json
@dataclass
class BackupDescription:
    backup_details: Optional[backupdetails.BackupDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupDetails' }})
    source_table_details: Optional[sourcetabledetails.SourceTableDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceTableDetails' }})
    source_table_feature_details: Optional[sourcetablefeaturedetails.SourceTableFeatureDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceTableFeatureDetails' }})
    
