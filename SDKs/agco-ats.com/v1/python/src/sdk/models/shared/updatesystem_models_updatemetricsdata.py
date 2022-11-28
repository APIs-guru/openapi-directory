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
class UpdateSystemModelsUpdateMetricsData:
    r"""UpdateSystemModelsUpdateMetricsData
    Model that retrieves the data for UpdateMetrics
    """
    
    active_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveVersion') }})
    active_version_by_client: Optional[List[UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveVersionByClient') }})
    current_state_by_client: Optional[List[UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentStateByClient') }})
    cut_off_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CutOffDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_refreshed: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataRefreshed'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    filtered_client_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilteredClientCount') }})
    package_errors: Optional[List[UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageErrors') }})
    total_client_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalClientCount') }})
    
