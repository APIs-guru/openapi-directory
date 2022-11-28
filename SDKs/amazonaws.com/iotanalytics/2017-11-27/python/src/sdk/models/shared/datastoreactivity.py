from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatastoreActivity:
    r"""DatastoreActivity
    The datastore activity that specifies where to store the processed data.
    """
    
    datastore_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreName') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
