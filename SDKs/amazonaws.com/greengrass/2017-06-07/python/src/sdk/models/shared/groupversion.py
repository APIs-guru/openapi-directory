from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GroupVersion:
    r"""GroupVersion
    Information about a group version.
    """
    
    connector_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectorDefinitionVersionArn') }})
    core_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CoreDefinitionVersionArn') }})
    device_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceDefinitionVersionArn') }})
    function_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionDefinitionVersionArn') }})
    logger_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggerDefinitionVersionArn') }})
    resource_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceDefinitionVersionArn') }})
    subscription_definition_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionDefinitionVersionArn') }})
    
