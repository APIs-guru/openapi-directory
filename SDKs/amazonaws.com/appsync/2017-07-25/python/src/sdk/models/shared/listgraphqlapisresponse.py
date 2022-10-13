from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import graphqlapi


@dataclass_json
@dataclass
class ListGraphqlApisResponse:
    graphql_apis: Optional[List[graphqlapi.GraphqlAPI]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'graphqlApis' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
