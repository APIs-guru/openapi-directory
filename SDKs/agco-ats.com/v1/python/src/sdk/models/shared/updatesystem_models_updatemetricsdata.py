from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import updatesystem_models_updatemetricsdata_activeversionbyclientrecord
from . import updatesystem_models_updatemetricsdata_currentstatebyclientrecord
from . import updatesystem_models_updatemetricsdata_packageerrorsrecord


@dataclass_json
@dataclass
class UpdateSystemModelsUpdateMetricsData:
    active_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveVersion' }})
    active_version_by_client: Optional[List[updatesystem_models_updatemetricsdata_activeversionbyclientrecord.UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveVersionByClient' }})
    current_state_by_client: Optional[List[updatesystem_models_updatemetricsdata_currentstatebyclientrecord.UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentStateByClient' }})
    cut_off_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CutOffDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_refreshed: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataRefreshed', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    filtered_client_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilteredClientCount' }})
    package_errors: Optional[List[updatesystem_models_updatemetricsdata_packageerrorsrecord.UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageErrors' }})
    total_client_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalClientCount' }})
    
