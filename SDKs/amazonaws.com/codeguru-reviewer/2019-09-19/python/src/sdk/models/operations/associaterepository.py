from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AssociateRepositoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class AssociateRepositoryRequestBodyKmsKeyDetails:
    encryption_option: Optional[shared.EncryptionOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionOption' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSKeyId' }})
    

@dataclass_json
@dataclass
class AssociateRepositoryRequestBodyRepository:
    bitbucket: Optional[shared.ThirdPartySourceRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bitbucket' }})
    code_commit: Optional[shared.CodeCommitRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeCommit' }})
    git_hub_enterprise_server: Optional[shared.ThirdPartySourceRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GitHubEnterpriseServer' }})
    s3_bucket: Optional[shared.S3Repository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Bucket' }})
    

@dataclass_json
@dataclass
class AssociateRepositoryRequestBody:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    kms_key_details: Optional[AssociateRepositoryRequestBodyKmsKeyDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSKeyDetails' }})
    repository: AssociateRepositoryRequestBodyRepository = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Repository' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    

@dataclass
class AssociateRepositoryRequest:
    headers: AssociateRepositoryHeaders = field(default=None)
    request: AssociateRepositoryRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateRepositoryResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    associate_repository_response: Optional[shared.AssociateRepositoryResponse] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
