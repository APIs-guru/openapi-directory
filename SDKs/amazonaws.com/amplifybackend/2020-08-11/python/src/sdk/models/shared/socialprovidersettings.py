from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import backendauthsocialproviderconfig
from . import backendauthsocialproviderconfig
from . import backendauthsocialproviderconfig
from . import backendauthappleproviderconfig


@dataclass_json
@dataclass
class SocialProviderSettings:
    facebook: Optional[backendauthsocialproviderconfig.BackendAuthSocialProviderConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Facebook' }})
    google: Optional[backendauthsocialproviderconfig.BackendAuthSocialProviderConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Google' }})
    login_with_amazon: Optional[backendauthsocialproviderconfig.BackendAuthSocialProviderConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoginWithAmazon' }})
    sign_in_with_apple: Optional[backendauthappleproviderconfig.BackendAuthAppleProviderConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SignInWithApple' }})
    
