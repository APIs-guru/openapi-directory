from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssetPropertyVariant:
    r"""AssetPropertyVariant
    <p>A structure that contains an asset property value. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html\">Variant</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyVariant</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class=\"title\"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>integerValue</code> parameter can be <code>'100'</code>.</p> </li> <li> <p>For references, you must specify either variables or parameters. For example, the value for the <code>booleanValue</code> parameter can be <code>$variable.offline</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates. </p> <p>In the following example, the value for the <code>doubleValue</code> parameter uses a substitution template. </p> <p> <code>'${$input.TemperatureInput.sensorData.temperature * 6 / 5 + 32}'</code> </p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html\">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>You must specify one of the following value types, depending on the <code>dataType</code> of the specified asset property. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html\">AssetProperty</a> in the <i>AWS IoT SiteWise API Reference</i>.</p>
    """
    
    boolean_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValue') }})
    double_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    integer_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
