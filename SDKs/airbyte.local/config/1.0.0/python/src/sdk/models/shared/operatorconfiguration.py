from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operatordbt
from . import operatornormalization
from . import operatortype_enum


@dataclass_json
@dataclass
class OperatorConfiguration:
    dbt: Optional[operatordbt.OperatorDbt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dbt' }})
    normalization: Optional[operatornormalization.OperatorNormalization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalization' }})
    operator_type: operatortype_enum.OperatorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorType' }})
    
