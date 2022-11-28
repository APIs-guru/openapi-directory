from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OtherName:
    r"""OtherName
    Defines a custom ASN.1 X.400 <code>GeneralName</code> using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of <a href=\"https://csrc.nist.gov/glossary/term/Object_Identifier\">Object Identifier (OID)</a>.
    """
    
    type_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeId') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
