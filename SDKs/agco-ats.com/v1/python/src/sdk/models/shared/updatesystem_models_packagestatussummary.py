from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateSystemModelsPackageStatusSummary:
    average_download_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AverageDownloadTime') }})
    average_install_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AverageInstallTime') }})
    downloaded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Downloaded') }})
    error: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    installed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Installed') }})
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Package') }})
    package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageID') }})
    package_status_items: Optional[List[UpdateSystemModelsPackageStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageStatusItems') }})
    
