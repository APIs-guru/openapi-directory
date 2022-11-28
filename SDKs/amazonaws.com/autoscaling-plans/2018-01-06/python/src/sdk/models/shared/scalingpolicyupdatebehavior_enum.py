from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ScalingPolicyUpdateBehaviorEnum(str, Enum):
    KEEP_EXTERNAL_POLICIES = "KeepExternalPolicies"
    REPLACE_EXTERNAL_POLICIES = "ReplaceExternalPolicies"

