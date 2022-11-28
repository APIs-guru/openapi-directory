from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SageMakerMachineLearningModelResourceData:
    r"""SageMakerMachineLearningModelResourceData
    Attributes that define an Amazon SageMaker machine learning resource.
    """
    
    destination_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPath') }})
    owner_setting: Optional[ResourceDownloadOwnerSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerSetting') }})
    sage_maker_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SageMakerJobArn') }})
    
