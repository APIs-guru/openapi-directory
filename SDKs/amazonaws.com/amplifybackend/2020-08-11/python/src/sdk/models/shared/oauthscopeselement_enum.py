from dataclasses import dataclass, field
from typing import Enum

class OAuthScopesElementEnum(str, Enum):
    PHONE = "PHONE"
    EMAIL = "EMAIL"
    OPENID = "OPENID"
    PROFILE = "PROFILE"
    AWS_COGNITO_SIGNIN_USER_ADMIN = "AWS_COGNITO_SIGNIN_USER_ADMIN"

