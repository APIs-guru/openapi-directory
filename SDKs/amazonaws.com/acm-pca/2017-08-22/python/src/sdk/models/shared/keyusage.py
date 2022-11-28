from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KeyUsage:
    r"""KeyUsage
    Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
    """
    
    crl_sign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CRLSign') }})
    data_encipherment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataEncipherment') }})
    decipher_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DecipherOnly') }})
    digital_signature: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DigitalSignature') }})
    encipher_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncipherOnly') }})
    key_agreement: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyAgreement') }})
    key_cert_sign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyCertSign') }})
    key_encipherment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyEncipherment') }})
    non_repudiation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonRepudiation') }})
    
