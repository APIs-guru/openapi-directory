from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateSvmActiveDirectoryConfiguration:
    r"""UpdateSvmActiveDirectoryConfiguration
    Updates the Microsoft Active Directory (AD) configuration of an SVM joined to an AD. Pleae note, account credentials are not returned in the response payload.
    """
    
    self_managed_active_directory_configuration: Optional[SelfManagedActiveDirectoryConfigurationUpdates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelfManagedActiveDirectoryConfiguration') }})
    
