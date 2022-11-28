from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AgcoPowerServicesModelsProductionData:
    r"""AgcoPowerServicesModelsProductionData
    Production data for an AGCO Power engine.
    """
    
    data_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataType') }})
    data_values: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataValues') }})
    
