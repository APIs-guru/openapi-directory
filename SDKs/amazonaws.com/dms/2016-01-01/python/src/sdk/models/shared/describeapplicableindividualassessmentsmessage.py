from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import migrationtypevalue_enum


@dataclass_json
@dataclass
class DescribeApplicableIndividualAssessmentsMessage:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    max_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxRecords' }})
    migration_type: Optional[migrationtypevalue_enum.MigrationTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MigrationType' }})
    replication_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceArn' }})
    replication_task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskArn' }})
    source_engine_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceEngineName' }})
    target_engine_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetEngineName' }})
    
