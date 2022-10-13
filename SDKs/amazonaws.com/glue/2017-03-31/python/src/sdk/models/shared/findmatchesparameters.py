from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FindMatchesParameters:
    accuracy_cost_tradeoff: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccuracyCostTradeoff' }})
    enforce_provided_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnforceProvidedLabels' }})
    precision_recall_tradeoff: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrecisionRecallTradeoff' }})
    primary_key_column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryKeyColumnName' }})
    
