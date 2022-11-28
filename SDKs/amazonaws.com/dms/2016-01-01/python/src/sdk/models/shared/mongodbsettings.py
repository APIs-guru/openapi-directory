from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MongoDbSettings:
    r"""MongoDbSettings
    Provides information that defines a MongoDB endpoint.
    """
    
    auth_mechanism: Optional[AuthMechanismValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthMechanism') }})
    auth_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthSource') }})
    auth_type: Optional[AuthTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthType') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    docs_to_investigate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocsToInvestigate') }})
    extract_doc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtractDocId') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    nesting_level: Optional[NestingLevelValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NestingLevel') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    secrets_manager_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretsManagerAccessRoleArn') }})
    secrets_manager_secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretsManagerSecretId') }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
