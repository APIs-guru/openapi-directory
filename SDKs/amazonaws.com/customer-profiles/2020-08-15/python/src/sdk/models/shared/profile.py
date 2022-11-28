from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Profile:
    r"""Profile
    The standard profile of a customer.
    """
    
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountNumber') }})
    additional_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalInformation') }})
    address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    billing_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingAddress') }})
    birth_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BirthDate') }})
    business_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessEmailAddress') }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessName') }})
    business_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessPhoneNumber') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailAddress') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    gender: Optional[GenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gender') }})
    home_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomePhoneNumber') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    mailing_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailingAddress') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MiddleName') }})
    mobile_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MobilePhoneNumber') }})
    party_type: Optional[PartyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartyType') }})
    personal_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PersonalEmailAddress') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneNumber') }})
    profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfileId') }})
    shipping_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingAddress') }})
    
