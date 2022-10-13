from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import httpendpointcommonattribute
from . import contentencoding_enum


@dataclass_json
@dataclass
class HTTPEndpointRequestConfiguration:
    common_attributes: Optional[List[httpendpointcommonattribute.HTTPEndpointCommonAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommonAttributes' }})
    content_encoding: Optional[contentencoding_enum.ContentEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentEncoding' }})
    
