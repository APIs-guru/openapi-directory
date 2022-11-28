from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KerberosAttributes:
    r"""KerberosAttributes
    Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href=\"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html\">Use Kerberos Authentication</a> in the <i>Amazon EMR Management Guide</i>.
    """
    
    kdc_admin_password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KdcAdminPassword') }})
    realm: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Realm') }})
    ad_domain_join_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ADDomainJoinPassword') }})
    ad_domain_join_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ADDomainJoinUser') }})
    cross_realm_trust_principal_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrossRealmTrustPrincipalPassword') }})
    
