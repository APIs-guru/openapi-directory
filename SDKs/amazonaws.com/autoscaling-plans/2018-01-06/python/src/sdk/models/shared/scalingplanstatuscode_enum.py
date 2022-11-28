from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ScalingPlanStatusCodeEnum(str, Enum):
    ACTIVE = "Active"
    ACTIVE_WITH_PROBLEMS = "ActiveWithProblems"
    CREATION_IN_PROGRESS = "CreationInProgress"
    CREATION_FAILED = "CreationFailed"
    DELETION_IN_PROGRESS = "DeletionInProgress"
    DELETION_FAILED = "DeletionFailed"
    UPDATE_IN_PROGRESS = "UpdateInProgress"
    UPDATE_FAILED = "UpdateFailed"

