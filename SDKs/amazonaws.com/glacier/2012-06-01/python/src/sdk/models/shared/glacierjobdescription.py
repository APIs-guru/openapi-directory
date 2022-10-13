from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import actioncode_enum
from . import inventoryretrievaljobdescription
from . import outputlocation
from . import selectparameters
from . import statuscode_enum


@dataclass_json
@dataclass
class GlacierJobDescription:
    action: Optional[actioncode_enum.ActionCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    archive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchiveId' }})
    archive_sha256_tree_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchiveSHA256TreeHash' }})
    archive_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchiveSizeInBytes' }})
    completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Completed' }})
    completion_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionDate' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    inventory_retrieval_parameters: Optional[inventoryretrievaljobdescription.InventoryRetrievalJobDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InventoryRetrievalParameters' }})
    inventory_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InventorySizeInBytes' }})
    job_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobDescription' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    job_output_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobOutputPath' }})
    output_location: Optional[outputlocation.OutputLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputLocation' }})
    retrieval_byte_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetrievalByteRange' }})
    sha256_tree_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SHA256TreeHash' }})
    sns_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SNSTopic' }})
    select_parameters: Optional[selectparameters.SelectParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectParameters' }})
    status_code: Optional[statuscode_enum.StatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusCode' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tier' }})
    vault_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VaultARN' }})
    
