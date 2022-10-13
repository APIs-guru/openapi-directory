from dataclasses import dataclass, field
from typing import Enum

class RequiredSignUpAttributesElementEnum(str, Enum):
    ADDRESS = "ADDRESS"
    BIRTHDATE = "BIRTHDATE"
    EMAIL = "EMAIL"
    FAMILY_NAME = "FAMILY_NAME"
    GENDER = "GENDER"
    GIVEN_NAME = "GIVEN_NAME"
    LOCALE = "LOCALE"
    MIDDLE_NAME = "MIDDLE_NAME"
    NAME = "NAME"
    NICKNAME = "NICKNAME"
    PHONE_NUMBER = "PHONE_NUMBER"
    PICTURE = "PICTURE"
    PREFERRED_USERNAME = "PREFERRED_USERNAME"
    PROFILE = "PROFILE"
    UPDATED_AT = "UPDATED_AT"
    WEBSITE = "WEBSITE"
    ZONE_INFO = "ZONE_INFO"

