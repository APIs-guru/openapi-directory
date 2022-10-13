from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import suitedefinitioninformation


@dataclass_json
@dataclass
class ListSuiteDefinitionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    suite_definition_information_list: Optional[List[suitedefinitioninformation.SuiteDefinitionInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionInformationList' }})
    
