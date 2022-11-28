from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class MergeProfilesPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class MergeProfilesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MergeProfilesRequestBodyFieldSourceProfileIds:
    r"""MergeProfilesRequestBodyFieldSourceProfileIds
    A duplicate customer profile that is to be merged into a main profile. 
    """
    
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountNumber') }})
    additional_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalInformation') }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    billing_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingAddress') }})
    birth_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BirthDate') }})
    business_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessEmailAddress') }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessName') }})
    business_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BusinessPhoneNumber') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailAddress') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gender') }})
    home_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomePhoneNumber') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    mailing_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailingAddress') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MiddleName') }})
    mobile_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MobilePhoneNumber') }})
    party_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartyType') }})
    personal_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PersonalEmailAddress') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneNumber') }})
    shipping_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingAddress') }})
    

@dataclass_json
@dataclass
class MergeProfilesRequestBody:
    main_profile_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MainProfileId') }})
    profile_ids_to_be_merged: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProfileIdsToBeMerged') }})
    field_source_profile_ids: Optional[MergeProfilesRequestBodyFieldSourceProfileIds] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldSourceProfileIds') }})
    

@dataclass
class MergeProfilesRequest:
    headers: MergeProfilesHeaders = field()
    path_params: MergeProfilesPathParams = field()
    request: MergeProfilesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MergeProfilesResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    merge_profiles_response: Optional[shared.MergeProfilesResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
