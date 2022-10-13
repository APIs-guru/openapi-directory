from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class MergeProfilesPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class MergeProfilesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class MergeProfilesRequestBodyFieldSourceProfileIds:
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountNumber' }})
    additional_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalInformation' }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    billing_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingAddress' }})
    birth_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BirthDate' }})
    business_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessEmailAddress' }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessName' }})
    business_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BusinessPhoneNumber' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailAddress' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstName' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Gender' }})
    home_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomePhoneNumber' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastName' }})
    mailing_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MailingAddress' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MiddleName' }})
    mobile_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MobilePhoneNumber' }})
    party_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartyType' }})
    personal_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PersonalEmailAddress' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    shipping_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingAddress' }})
    

@dataclass_json
@dataclass
class MergeProfilesRequestBody:
    field_source_profile_ids: Optional[MergeProfilesRequestBodyFieldSourceProfileIds] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FieldSourceProfileIds' }})
    main_profile_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MainProfileId' }})
    profile_ids_to_be_merged: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfileIdsToBeMerged' }})
    

@dataclass
class MergeProfilesRequest:
    path_params: MergeProfilesPathParams = field(default=None)
    headers: MergeProfilesHeaders = field(default=None)
    request: MergeProfilesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MergeProfilesResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    merge_profiles_response: Optional[shared.MergeProfilesResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
