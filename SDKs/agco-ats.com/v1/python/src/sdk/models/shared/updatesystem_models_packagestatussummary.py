from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import updatesystem_models_packagestatus


@dataclass_json
@dataclass
class UpdateSystemModelsPackageStatusSummary:
    average_download_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AverageDownloadTime' }})
    average_install_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AverageInstallTime' }})
    downloaded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Downloaded' }})
    error: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    installed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Installed' }})
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Package' }})
    package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageID' }})
    package_status_items: Optional[List[updatesystem_models_packagestatus.UpdateSystemModelsPackageStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageStatusItems' }})
    
