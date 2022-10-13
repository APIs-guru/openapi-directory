from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InlineResponse200Connection:
    autonomous_system_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autonomous_system_number' }})
    autonomous_system_organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autonomous_system_organization' }})
    connection_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_type' }})
    isp_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isp_name' }})
    organization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_name' }})
    

@dataclass_json
@dataclass
class InlineResponse200Currency:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_code' }})
    currency_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_name' }})
    

@dataclass_json
@dataclass
class InlineResponse200Flag:
    emoji: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emoji' }})
    png: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'png' }})
    svg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'svg' }})
    unicode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unicode' }})
    

@dataclass_json
@dataclass
class InlineResponse200Security:
    is_vpn: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_vpn' }})
    

@dataclass_json
@dataclass
class InlineResponse200Timezone:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abbreviation' }})
    current_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_time' }})
    gmt_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gmt_offset' }})
    is_dst: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_dst' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class InlineResponse200:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    city_geoname_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city_geoname_id' }})
    connection: Optional[InlineResponse200Connection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    continent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continent' }})
    continent_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continent_code' }})
    continent_geoname_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continent_geoname_id' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    country_geoname_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_geoname_id' }})
    country_is_eu: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_is_eu' }})
    currency: Optional[InlineResponse200Currency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    flag: Optional[InlineResponse200Flag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flag' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    region_geoname_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region_geoname_id' }})
    region_iso_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region_iso_code' }})
    security: Optional[InlineResponse200Security] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'security' }})
    timezone: Optional[InlineResponse200Timezone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    
