from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nestinglevelvalue_enum


@dataclass_json
@dataclass
class DocDbSettings:
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    docs_to_investigate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocsToInvestigate' }})
    extract_doc_id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtractDocId' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    nesting_level: Optional[nestinglevelvalue_enum.NestingLevelValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NestingLevel' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    secrets_manager_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretsManagerAccessRoleArn' }})
    secrets_manager_secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretsManagerSecretId' }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
