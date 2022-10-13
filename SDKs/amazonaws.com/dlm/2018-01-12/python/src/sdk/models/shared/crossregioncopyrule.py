from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import crossregioncopydeprecaterule
from . import crossregioncopyretainrule


@dataclass_json
@dataclass
class CrossRegionCopyRule:
    cmk_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CmkArn' }})
    copy_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyTags' }})
    deprecate_rule: Optional[crossregioncopydeprecaterule.CrossRegionCopyDeprecateRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeprecateRule' }})
    encrypted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encrypted' }})
    retain_rule: Optional[crossregioncopyretainrule.CrossRegionCopyRetainRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetainRule' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    target_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetRegion' }})
    
