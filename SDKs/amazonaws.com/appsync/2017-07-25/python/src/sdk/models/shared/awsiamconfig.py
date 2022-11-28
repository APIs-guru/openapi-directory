from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsIamConfig:
    r"""AwsIamConfig
    The Identity and Access Management configuration.
    """
    
    signing_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingRegion') }})
    signing_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingServiceName') }})
    
