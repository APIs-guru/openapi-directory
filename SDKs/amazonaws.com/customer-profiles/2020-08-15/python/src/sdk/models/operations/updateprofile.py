from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateProfilePathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateProfileRequestBodyAddress:
    r"""UpdateProfileRequestBodyAddress
    Updates associated with the address properties of a customer profile.
    """
    
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address1') }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address2') }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address3') }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address4') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('County') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalCode') }})
    province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Province') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    

@dataclass_json
@dataclass
class UpdateProfileRequestBodyBillingAddress:
    r"""UpdateProfileRequestBodyBillingAddress
    Updates associated with the address properties of a customer profile.
    """
    
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address1') }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address2') }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address3') }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address4') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('County') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalCode') }})
    province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Province') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
class UpdateProfileRequestBodyGenderEnum(str, Enum):
    MALE = "MALE"
    FEMALE = "FEMALE"
    UNSPECIFIED = "UNSPECIFIED"


@dataclass_json
@dataclass
class UpdateProfileRequestBodyMailingAddress:
    r"""UpdateProfileRequestBodyMailingAddress
    Updates associated with the address properties of a customer profile.
    """
    
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address1') }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address2') }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address3') }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address4') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('County') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalCode') }})
    province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Province') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
class UpdateProfileRequestBodyPartyTypeEnum(str, Enum):
    INDIVIDUAL = "INDIVIDUAL"
    BUSINESS = "BUSINESS"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class UpdateProfileRequestBodyShippingAddress:
    r"""UpdateProfileRequestBodyShippingAddress
    Updates associated with the address properties of a customer profile.
    """
    
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address1') }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address2') }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address3') }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address4') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('County') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalCode') }})
    province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Province') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    

@dataclass_json
@dataclass
class UpdateProfileRequestBody:
    profile_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfileId') }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountNumber') }})
    additional_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalInformation') }})
    address: Optional[UpdateProfileRequestBodyAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    billing_address: Optional[UpdateProfileRequestBodyBillingAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingAddress') }})
    birth_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BirthDate') }})
    business_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessEmailAddress') }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessName') }})
    business_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessPhoneNumber') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailAddress') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    gender: Optional[UpdateProfileRequestBodyGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gender') }})
    home_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomePhoneNumber') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    mailing_address: Optional[UpdateProfileRequestBodyMailingAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailingAddress') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MiddleName') }})
    mobile_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MobilePhoneNumber') }})
    party_type: Optional[UpdateProfileRequestBodyPartyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartyType') }})
    personal_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PersonalEmailAddress') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneNumber') }})
    shipping_address: Optional[UpdateProfileRequestBodyShippingAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingAddress') }})
    

@dataclass
class UpdateProfileRequest:
    headers: UpdateProfileHeaders = field()
    path_params: UpdateProfilePathParams = field()
    request: UpdateProfileRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateProfileResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_profile_response: Optional[shared.UpdateProfileResponse] = field(default=None)
    
