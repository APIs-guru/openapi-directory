from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Alias:
    r"""Alias
    A DNS alias that is associated with the file system. You can use a DNS alias to access a file system using user-defined DNS names, in addition to the default DNS name that Amazon FSx assigns to the file system. For more information, see <a href=\"https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html\">DNS aliases</a> in the <i>FSx for Windows File Server User Guide</i>.
    """
    
    lifecycle: Optional[AliasLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lifecycle') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
