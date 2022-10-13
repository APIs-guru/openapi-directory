from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import customdomainconfigtype
from . import domainstatustype_enum


@dataclass_json
@dataclass
class DomainDescriptionType:
    aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AWSAccountId' }})
    cloud_front_distribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudFrontDistribution' }})
    custom_domain_config: Optional[customdomainconfigtype.CustomDomainConfigType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomDomainConfig' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Bucket' }})
    status: Optional[domainstatustype_enum.DomainStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
