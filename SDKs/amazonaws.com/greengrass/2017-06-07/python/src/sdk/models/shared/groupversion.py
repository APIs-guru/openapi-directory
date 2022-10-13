from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupVersion:
    connector_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectorDefinitionVersionArn' }})
    core_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CoreDefinitionVersionArn' }})
    device_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceDefinitionVersionArn' }})
    function_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionDefinitionVersionArn' }})
    logger_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggerDefinitionVersionArn' }})
    resource_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceDefinitionVersionArn' }})
    subscription_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionDefinitionVersionArn' }})
    
