from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import featurizationmethodname_enum


@dataclass_json
@dataclass
class FeaturizationMethod:
    featurization_method_name: featurizationmethodname_enum.FeaturizationMethodNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeaturizationMethodName' }})
    featurization_method_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeaturizationMethodParameters' }})
    
