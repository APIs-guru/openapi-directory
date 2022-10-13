from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagerecipesummary


@dataclass_json
@dataclass
class ListImageRecipesResponse:
    image_recipe_summary_list: Optional[List[imagerecipesummary.ImageRecipeSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageRecipeSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
