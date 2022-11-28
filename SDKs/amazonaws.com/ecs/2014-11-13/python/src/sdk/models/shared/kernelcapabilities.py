from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KernelCapabilities:
    r"""KernelCapabilities
    The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker. For more information on the default capabilities and the non-default available capabilities, see <a href=\"https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities\">Runtime privilege and Linux capabilities</a> in the <i>Docker run reference</i>. For more detailed information on these Linux capabilities, see the <a href=\"http://man7.org/linux/man-pages/man7/capabilities.7.html\">capabilities(7)</a> Linux manual page.
    """
    
    add: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    drop: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drop') }})
    
