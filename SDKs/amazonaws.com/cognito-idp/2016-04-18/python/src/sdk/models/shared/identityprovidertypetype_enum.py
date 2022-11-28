from dataclasses import dataclass, field
from enum import Enum

class IdentityProviderTypeTypeEnum(str, Enum):
    SAML = "SAML"
    FACEBOOK = "Facebook"
    GOOGLE = "Google"
    LOGIN_WITH_AMAZON = "LoginWithAmazon"
    SIGN_IN_WITH_APPLE = "SignInWithApple"
    OIDC = "OIDC"

