from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DomainDescriptionType:
    r"""DomainDescriptionType
    A container for information about a domain.
    """
    
    aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AWSAccountId') }})
    cloud_front_distribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudFrontDistribution') }})
    custom_domain_config: Optional[CustomDomainConfigType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDomainConfig') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Bucket') }})
    status: Optional[DomainStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
