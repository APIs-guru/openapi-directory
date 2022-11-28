from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ClientVpnAuthentication:
    r"""ClientVpnAuthentication
    Describes the authentication methods used by a Client VPN endpoint. For more information, see <a href=\"https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-authentication.html\">Authentication</a> in the <i>AWS Client VPN Administrator Guide</i>.
    """
    
    active_directory: Optional[DirectoryServiceAuthentication] = field(default=None)
    federated_authentication: Optional[FederatedAuthentication] = field(default=None)
    mutual_authentication: Optional[CertificateAuthentication] = field(default=None)
    type: Optional[ClientVpnAuthenticationTypeEnum] = field(default=None)
    
