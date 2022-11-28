from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GlacierJobDescription:
    r"""GlacierJobDescription
    Contains the description of an Amazon S3 Glacier job.
    """
    
    action: Optional[ActionCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    archive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArchiveId') }})
    archive_sha256_tree_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArchiveSHA256TreeHash') }})
    archive_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArchiveSizeInBytes') }})
    completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Completed') }})
    completion_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionDate') }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    inventory_retrieval_parameters: Optional[InventoryRetrievalJobDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InventoryRetrievalParameters') }})
    inventory_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InventorySizeInBytes') }})
    job_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobDescription') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    job_output_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobOutputPath') }})
    output_location: Optional[OutputLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputLocation') }})
    retrieval_byte_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetrievalByteRange') }})
    sha256_tree_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SHA256TreeHash') }})
    sns_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SNSTopic') }})
    select_parameters: Optional[SelectParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectParameters') }})
    status_code: Optional[StatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusCode') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    vault_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VaultARN') }})
    
