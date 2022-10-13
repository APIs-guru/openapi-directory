from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import address
from . import address
from . import gender_enum
from . import address
from . import partytype_enum
from . import address


@dataclass_json
@dataclass
class Profile:
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountNumber' }})
    additional_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalInformation' }})
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    billing_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingAddress' }})
    birth_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BirthDate' }})
    business_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessEmailAddress' }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessName' }})
    business_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessPhoneNumber' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailAddress' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstName' }})
    gender: Optional[gender_enum.GenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Gender' }})
    home_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomePhoneNumber' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastName' }})
    mailing_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MailingAddress' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MiddleName' }})
    mobile_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MobilePhoneNumber' }})
    party_type: Optional[partytype_enum.PartyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartyType' }})
    personal_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PersonalEmailAddress' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfileId' }})
    shipping_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingAddress' }})
    
