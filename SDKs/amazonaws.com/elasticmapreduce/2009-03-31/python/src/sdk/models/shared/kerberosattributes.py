from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KerberosAttributes:
    ad_domain_join_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ADDomainJoinPassword' }})
    ad_domain_join_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ADDomainJoinUser' }})
    cross_realm_trust_principal_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrossRealmTrustPrincipalPassword' }})
    kdc_admin_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KdcAdminPassword' }})
    realm: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Realm' }})
    
