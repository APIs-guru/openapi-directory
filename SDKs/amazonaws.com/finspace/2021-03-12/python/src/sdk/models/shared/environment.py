from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import federationmode_enum
from . import federationparameters
from . import environmentstatus_enum


@dataclass_json
@dataclass
class Environment:
    aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsAccountId' }})
    dedicated_service_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dedicatedServiceAccountId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentArn' }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    environment_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentUrl' }})
    federation_mode: Optional[federationmode_enum.FederationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federationMode' }})
    federation_parameters: Optional[federationparameters.FederationParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federationParameters' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sage_maker_studio_domain_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sageMakerStudioDomainUrl' }})
    status: Optional[environmentstatus_enum.EnvironmentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
