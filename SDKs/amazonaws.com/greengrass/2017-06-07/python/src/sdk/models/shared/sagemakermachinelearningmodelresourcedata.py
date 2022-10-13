from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcedownloadownersetting


@dataclass_json
@dataclass
class SageMakerMachineLearningModelResourceData:
    destination_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationPath' }})
    owner_setting: Optional[resourcedownloadownersetting.ResourceDownloadOwnerSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerSetting' }})
    sage_maker_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SageMakerJobArn' }})
    
