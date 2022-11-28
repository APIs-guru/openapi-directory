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
class AssociateRepositoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AssociateRepositoryRequestBodyKmsKeyDetails:
    r"""AssociateRepositoryRequestBodyKmsKeyDetails
    <p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a respository association.</p> </li> </ul>
    """
    
    encryption_option: Optional[shared.EncryptionOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionOption') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSKeyId') }})
    

@dataclass_json
@dataclass
class AssociateRepositoryRequestBodyRepository:
    r"""AssociateRepositoryRequestBodyRepository
     Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository. 
    """
    
    bitbucket: Optional[shared.ThirdPartySourceRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bitbucket') }})
    code_commit: Optional[shared.CodeCommitRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeCommit') }})
    git_hub_enterprise_server: Optional[shared.ThirdPartySourceRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GitHubEnterpriseServer') }})
    s3_bucket: Optional[shared.S3Repository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Bucket') }})
    

@dataclass_json
@dataclass
class AssociateRepositoryRequestBody:
    repository: AssociateRepositoryRequestBodyRepository = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Repository') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    kms_key_details: Optional[AssociateRepositoryRequestBodyKmsKeyDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSKeyDetails') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclass
class AssociateRepositoryRequest:
    headers: AssociateRepositoryHeaders = field()
    request: AssociateRepositoryRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateRepositoryResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    associate_repository_response: Optional[shared.AssociateRepositoryResponse] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
