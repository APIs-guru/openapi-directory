from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import encryptionconfiguration
from . import crossregioncopyretainrule


@dataclass_json
@dataclass
class CrossRegionCopyAction:
    encryption_configuration: encryptionconfiguration.EncryptionConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionConfiguration' }})
    retain_rule: Optional[crossregioncopyretainrule.CrossRegionCopyRetainRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetainRule' }})
    target: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    
