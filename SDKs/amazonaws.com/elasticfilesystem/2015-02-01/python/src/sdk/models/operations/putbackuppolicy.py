from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutBackupPolicyPathParams:
    file_system_id: str = field(metadata={'path_param': { 'field_name': 'FileSystemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutBackupPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutBackupPolicyRequestBodyBackupPolicy:
    r"""PutBackupPolicyRequestBodyBackupPolicy
    The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups\">Automatic backups</a>.
    """
    
    status: Optional[shared.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    

@dataclass_json
@dataclass
class PutBackupPolicyRequestBody:
    backup_policy: PutBackupPolicyRequestBodyBackupPolicy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupPolicy') }})
    

@dataclass
class PutBackupPolicyRequest:
    headers: PutBackupPolicyHeaders = field()
    path_params: PutBackupPolicyPathParams = field()
    request: PutBackupPolicyRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutBackupPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    backup_policy_description: Optional[shared.BackupPolicyDescription] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    incorrect_file_system_life_cycle_state: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
