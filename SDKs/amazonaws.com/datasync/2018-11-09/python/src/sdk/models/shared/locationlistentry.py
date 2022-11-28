from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LocationListEntry:
    r"""LocationListEntry
    Represents a single entry in a list of locations. <code>LocationListEntry</code> returns an array that contains a list of locations when the <a href=\"https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html\">ListLocations</a> operation is called.
    """
    
    location_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationArn') }})
    location_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationUri') }})
    
