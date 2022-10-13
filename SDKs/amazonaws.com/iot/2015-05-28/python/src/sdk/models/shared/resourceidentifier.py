from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import policyversionidentifier


@dataclass_json
@dataclass
class ResourceIdentifier:
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    ca_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificateId' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    cognito_identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cognitoIdentityPoolId' }})
    device_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceCertificateId' }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamRoleArn' }})
    policy_version_identifier: Optional[policyversionidentifier.PolicyVersionIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyVersionIdentifier' }})
    role_alias_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleAliasArn' }})
    
