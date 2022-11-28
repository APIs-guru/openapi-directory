from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ElasticsearchDataSourceConfig:
    r"""ElasticsearchDataSourceConfig
    Describes an Elasticsearch data source configuration.
    """
    
    aws_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    
