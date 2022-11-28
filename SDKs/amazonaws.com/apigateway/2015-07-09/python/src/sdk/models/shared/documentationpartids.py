from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DocumentationPartIds:
    r"""DocumentationPartIds
    <p>A collection of the imported <a>DocumentationPart</a> identifiers.</p> <div class=\"remarks\">This is used to return the result when documentation parts in an external (e.g., OpenAPI) file are imported into API Gateway</div> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html\">Documenting an API</a>, <a href=\"https://docs.aws.amazon.com/apigateway/api-reference/link-relation/documentationpart-import/\">documentationpart:import</a>, <a>DocumentationPart</a> </div>
    """
    
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
