from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import graphqlapi


@dataclass_json
@dataclass
class GetGraphqlAPIResponse:
    graphql_api: Optional[graphqlapi.GraphqlAPI] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'graphqlApi' }})
    
