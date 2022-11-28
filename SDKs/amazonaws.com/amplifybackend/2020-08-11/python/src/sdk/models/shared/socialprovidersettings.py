from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SocialProviderSettings:
    r"""SocialProviderSettings
    The settings for using the social identity providers for access to your Amplify app.
    """
    
    facebook: Optional[BackendAuthSocialProviderConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Facebook') }})
    google: Optional[BackendAuthSocialProviderConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Google') }})
    login_with_amazon: Optional[BackendAuthSocialProviderConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoginWithAmazon') }})
    sign_in_with_apple: Optional[BackendAuthAppleProviderConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignInWithApple') }})
    
