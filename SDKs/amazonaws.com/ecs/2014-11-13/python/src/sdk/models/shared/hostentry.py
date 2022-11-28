from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HostEntry:
    r"""HostEntry
    Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>. 
    """
    
    hostname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    ip_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    
