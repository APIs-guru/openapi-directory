from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DynamoDbSettings:
    r"""DynamoDbSettings
    Provides the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint.
    """
    
    service_access_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccessRoleArn') }})
    
