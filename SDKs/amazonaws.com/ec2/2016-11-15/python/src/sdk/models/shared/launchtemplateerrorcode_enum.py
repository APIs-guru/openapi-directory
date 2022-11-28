from dataclasses import dataclass, field
from enum import Enum

class LaunchTemplateErrorCodeEnum(str, Enum):
    LAUNCH_TEMPLATE_ID_DOES_NOT_EXIST = "launchTemplateIdDoesNotExist"
    LAUNCH_TEMPLATE_ID_MALFORMED = "launchTemplateIdMalformed"
    LAUNCH_TEMPLATE_NAME_DOES_NOT_EXIST = "launchTemplateNameDoesNotExist"
    LAUNCH_TEMPLATE_NAME_MALFORMED = "launchTemplateNameMalformed"
    LAUNCH_TEMPLATE_VERSION_DOES_NOT_EXIST = "launchTemplateVersionDoesNotExist"
    UNEXPECTED_ERROR = "unexpectedError"

