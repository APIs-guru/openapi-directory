from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class TrustStateEnum(str, Enum):
    CREATING = "Creating"
    CREATED = "Created"
    VERIFYING = "Verifying"
    VERIFY_FAILED = "VerifyFailed"
    VERIFIED = "Verified"
    UPDATING = "Updating"
    UPDATE_FAILED = "UpdateFailed"
    UPDATED = "Updated"
    DELETING = "Deleting"
    DELETED = "Deleted"
    FAILED = "Failed"

