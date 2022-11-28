from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SoftwareTokenMfaSettingsType:
    r"""SoftwareTokenMfaSettingsType
    The type used for enabling software token MFA at the user level. If an MFA type is enabled for a user, the user will be prompted for MFA during all sign in attempts, unless device tracking is turned on and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign in attempts, disable MFA for users and turn on Adaptive Authentication for the user pool.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    preferred_mfa: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMfa') }})
    
