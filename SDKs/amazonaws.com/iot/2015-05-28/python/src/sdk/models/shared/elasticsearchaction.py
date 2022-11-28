from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ElasticsearchAction:
    r"""ElasticsearchAction
    <p>Describes an action that writes data to an Amazon Elasticsearch Service domain.</p> <note> <p>This action is deprecated. Use the <a href=\"https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html\">OpenSearch action</a> instead.</p> </note>
    """
    
    endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    index: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
