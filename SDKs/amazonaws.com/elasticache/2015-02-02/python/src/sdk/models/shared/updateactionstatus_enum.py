from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class UpdateActionStatusEnum(str, Enum):
    NOT_APPLIED = "not-applied"
    WAITING_TO_START = "waiting-to-start"
    IN_PROGRESS = "in-progress"
    STOPPING = "stopping"
    STOPPED = "stopped"
    COMPLETE = "complete"
    SCHEDULING = "scheduling"
    SCHEDULED = "scheduled"
    NOT_APPLICABLE = "not-applicable"

