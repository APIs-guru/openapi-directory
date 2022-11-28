from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PasswordPolicyType:
    r"""PasswordPolicyType
    The password policy type.
    """
    
    minimum_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumLength') }})
    require_lowercase: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequireLowercase') }})
    require_numbers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequireNumbers') }})
    require_symbols: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequireSymbols') }})
    require_uppercase: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequireUppercase') }})
    temporary_password_validity_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemporaryPasswordValidityDays') }})
    
