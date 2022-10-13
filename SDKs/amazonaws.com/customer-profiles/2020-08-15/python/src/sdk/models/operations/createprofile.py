from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateProfilePathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateProfileRequestBodyAddress:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address2' }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address3' }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address4' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'City' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'County' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalCode' }})
    province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Province' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    

@dataclass_json
@dataclass
class CreateProfileRequestBodyBillingAddress:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address2' }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address3' }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address4' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'City' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'County' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalCode' }})
    province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Province' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
class CreateProfileRequestBodyGenderEnum(str, Enum):
    MALE = "MALE"
    FEMALE = "FEMALE"
    UNSPECIFIED = "UNSPECIFIED"


@dataclass_json
@dataclass
class CreateProfileRequestBodyMailingAddress:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address2' }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address3' }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address4' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'City' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'County' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalCode' }})
    province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Province' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
class CreateProfileRequestBodyPartyTypeEnum(str, Enum):
    INDIVIDUAL = "INDIVIDUAL"
    BUSINESS = "BUSINESS"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class CreateProfileRequestBodyShippingAddress:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address2' }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address3' }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address4' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'City' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'County' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalCode' }})
    province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Province' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    

@dataclass_json
@dataclass
class CreateProfileRequestBody:
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountNumber' }})
    additional_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalInformation' }})
    address: Optional[CreateProfileRequestBodyAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    billing_address: Optional[CreateProfileRequestBodyBillingAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingAddress' }})
    birth_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BirthDate' }})
    business_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessEmailAddress' }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessName' }})
    business_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessPhoneNumber' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailAddress' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstName' }})
    gender: Optional[CreateProfileRequestBodyGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Gender' }})
    home_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomePhoneNumber' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastName' }})
    mailing_address: Optional[CreateProfileRequestBodyMailingAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MailingAddress' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MiddleName' }})
    mobile_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MobilePhoneNumber' }})
    party_type: Optional[CreateProfileRequestBodyPartyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartyType' }})
    personal_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PersonalEmailAddress' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    shipping_address: Optional[CreateProfileRequestBodyShippingAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingAddress' }})
    

@dataclass
class CreateProfileRequest:
    path_params: CreateProfilePathParams = field(default=None)
    headers: CreateProfileHeaders = field(default=None)
    request: CreateProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateProfileResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_profile_response: Optional[shared.CreateProfileResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
