from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Configuration:
    r"""Configuration
    <note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see <a href=\"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html\">Configuring Applications</a>.</p>
    """
    
    classification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classification') }})
    configurations: Optional[List[Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configurations') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Properties') }})
    
