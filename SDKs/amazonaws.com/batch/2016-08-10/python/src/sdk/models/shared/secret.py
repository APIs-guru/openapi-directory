from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Secret:
    r"""Secret
    <p>An object representing the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html\">Specifying sensitive data</a> in the <i>Batch User Guide</i>.</p>
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value_from: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueFrom') }})
    
