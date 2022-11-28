from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class DeploymentComponentUpdatePolicyActionEnum(str, Enum):
    NOTIFY_COMPONENTS = "NOTIFY_COMPONENTS"
    SKIP_NOTIFY_COMPONENTS = "SKIP_NOTIFY_COMPONENTS"

