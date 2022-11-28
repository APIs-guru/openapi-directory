from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutItemInput:
    r"""PutItemInput
    The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
    """
    
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    
