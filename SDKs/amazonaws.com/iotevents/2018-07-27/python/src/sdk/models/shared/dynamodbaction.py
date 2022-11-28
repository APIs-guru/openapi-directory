from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DynamoDbAction:
    r"""DynamoDbAction
    <p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href=\"https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html\">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBAction</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class=\"title\"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>hashKeyType</code> parameter can be <code>'STRING'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>hashKeyField</code> parameter can be <code>$input.GreenhouseInput.name</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>hashKeyValue</code> parameter uses a substitution template. </p> <p> <code>'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html\">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the <code>payloadField</code> parameter is <code>&lt;payload-field&gt;_raw</code>.</p>
    """
    
    hash_key_field: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashKeyField') }})
    hash_key_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashKeyValue') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    hash_key_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashKeyType') }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    payload: Optional[Payload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    payload_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadField') }})
    range_key_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeKeyField') }})
    range_key_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeKeyType') }})
    range_key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeKeyValue') }})
    
