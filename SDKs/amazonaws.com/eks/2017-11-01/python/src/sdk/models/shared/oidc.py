from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Oidc:
    r"""Oidc
    An object representing the <a href=\"https://openid.net/connect/\">OpenID Connect</a> (OIDC) identity provider information for the cluster.
    """
    
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    
