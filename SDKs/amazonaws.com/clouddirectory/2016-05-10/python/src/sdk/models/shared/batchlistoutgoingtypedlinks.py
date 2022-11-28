from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchListOutgoingTypedLinks:
    r"""BatchListOutgoingTypedLinks
    Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    object_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    filter_attribute_ranges: Optional[List[TypedLinkAttributeRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterAttributeRanges') }})
    filter_typed_link: Optional[TypedLinkSchemaAndFacetName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterTypedLink') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
