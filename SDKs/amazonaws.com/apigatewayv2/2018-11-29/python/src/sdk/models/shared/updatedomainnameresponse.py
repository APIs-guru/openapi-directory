from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateDomainNameResponse:
    api_mapping_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiMappingSelectionExpression') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    domain_name_configurations: Optional[List[DomainNameConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainNameConfigurations') }})
    mutual_tls_authentication: Optional[MutualTLSAuthentication] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MutualTlsAuthentication') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
