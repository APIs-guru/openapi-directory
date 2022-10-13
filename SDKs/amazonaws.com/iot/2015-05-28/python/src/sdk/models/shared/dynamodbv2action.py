from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import putiteminput


@dataclass_json
@dataclass
class DynamoDBv2Action:
    put_item: putiteminput.PutItemInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'putItem' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
