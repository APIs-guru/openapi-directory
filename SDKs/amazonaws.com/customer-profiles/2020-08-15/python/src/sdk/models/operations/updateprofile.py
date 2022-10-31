from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateProfilePathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    

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
class UpdateProfileRequestBodyBillingAddress:
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
    
class UpdateProfileRequestBodyGenderEnum(str, Enum):
    MALE = "MALE"
    FEMALE = "FEMALE"
    UNSPECIFIED = "UNSPECIFIED"


@dataclass_json
@dataclass
class UpdateProfileRequestBodyMailingAddress:
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
    
class UpdateProfileRequestBodyPartyTypeEnum(str, Enum):
    INDIVIDUAL = "INDIVIDUAL"
    BUSINESS = "BUSINESS"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class UpdateProfileRequestBodyShippingAddress:
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
class UpdateProfileRequestBody:
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountNumber' }})
    additional_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalInformation' }})
    address: Optional[UpdateProfileRequestBodyAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    billing_address: Optional[UpdateProfileRequestBodyBillingAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingAddress' }})
    birth_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BirthDate' }})
    business_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessEmailAddress' }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessName' }})
    business_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessPhoneNumber' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailAddress' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstName' }})
    gender: Optional[UpdateProfileRequestBodyGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Gender' }})
    home_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomePhoneNumber' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastName' }})
    mailing_address: Optional[UpdateProfileRequestBodyMailingAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MailingAddress' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MiddleName' }})
    mobile_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MobilePhoneNumber' }})
    party_type: Optional[UpdateProfileRequestBodyPartyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartyType' }})
    personal_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PersonalEmailAddress' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    profile_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfileId' }})
    shipping_address: Optional[UpdateProfileRequestBodyShippingAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingAddress' }})
    

@dataclass
class UpdateProfileRequest:
    path_params: UpdateProfilePathParams = field(default=None)
    headers: UpdateProfileHeaders = field(default=None)
    request: UpdateProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateProfileResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_profile_response: Optional[shared.UpdateProfileResponse] = field(default=None)
    
