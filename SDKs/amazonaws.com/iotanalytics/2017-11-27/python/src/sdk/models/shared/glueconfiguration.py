from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GlueConfiguration:
    r"""GlueConfiguration
    Configuration information for coordination with Glue, a fully managed extract, transform and load (ETL) service.
    """
    
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseName') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    
