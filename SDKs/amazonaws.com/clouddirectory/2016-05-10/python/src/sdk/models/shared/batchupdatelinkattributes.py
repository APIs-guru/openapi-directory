from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchUpdateLinkAttributes:
    r"""BatchUpdateLinkAttributes
    Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    attribute_updates: List[LinkAttributeUpdate] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeUpdates') }})
    typed_link_specifier: TypedLinkSpecifier = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkSpecifier') }})
    
