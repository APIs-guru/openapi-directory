from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ImportImageResult:
    architecture: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    encrypted: Optional[bool] = field(default=None)
    hypervisor: Optional[str] = field(default=None)
    image_id: Optional[str] = field(default=None)
    import_task_id: Optional[str] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    license_specifications: Optional[List[ImportImageLicenseConfigurationResponse]] = field(default=None)
    license_type: Optional[str] = field(default=None)
    platform: Optional[str] = field(default=None)
    progress: Optional[str] = field(default=None)
    snapshot_details: Optional[List[SnapshotDetail]] = field(default=None)
    status: Optional[str] = field(default=None)
    status_message: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    usage_operation: Optional[str] = field(default=None)
    
