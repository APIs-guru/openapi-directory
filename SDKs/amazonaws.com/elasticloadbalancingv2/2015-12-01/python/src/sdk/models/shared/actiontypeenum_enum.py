from dataclasses import dataclass, field
from enum import Enum

class ActionTypeEnumEnum(str, Enum):
    FORWARD = "forward"
    AUTHENTICATE_OIDC = "authenticate-oidc"
    AUTHENTICATE_COGNITO = "authenticate-cognito"
    REDIRECT = "redirect"
    FIXED_RESPONSE = "fixed-response"

