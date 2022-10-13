from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EvaluationParameters:
    back_test_window_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackTestWindowOffset' }})
    number_of_backtest_windows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfBacktestWindows' }})
    
