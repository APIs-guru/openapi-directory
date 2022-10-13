from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DealerDbModelsDealer:
    billing_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingAddress' }})
    billing_address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingAddress2' }})
    billing_address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingAddress3' }})
    billing_address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingAddress4' }})
    billing_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingCity' }})
    billing_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingCountry' }})
    billing_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingCountryCode' }})
    billing_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingState' }})
    billing_zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingZip' }})
    brands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Brands' }})
    dealer_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DealerCode' }})
    dealer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DealerName' }})
    dealer_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DealerStatus' }})
    dealer_status_update_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DealerStatusUpdateDate' }})
    filler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filler' }})
    is_valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsValid' }})
    language_preference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguagePreference' }})
    region1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region1' }})
    region2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region2' }})
    region_mapping: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionMapping' }})
    role_brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleBrand' }})
    shipping_address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingAddress2' }})
    shipping_address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingAddress3' }})
    shipping_address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingAddress4' }})
    shipping_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingCity' }})
    shipping_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingCountry' }})
    shipping_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingState' }})
    shipping_street: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingStreet' }})
    shipping_zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingZip' }})
    telephone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Telephone' }})
    vat_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VATCode' }})
    
