package shared



type InlineResponse200Connection struct {
    AutonomousSystemNumber *int64 `json:"autonomous_system_number,omitempty"`
    AutonomousSystemOrganization *string `json:"autonomous_system_organization,omitempty"`
    ConnectionType *string `json:"connection_type,omitempty"`
    IspName *string `json:"isp_name,omitempty"`
    OrganizationName *string `json:"organization_name,omitempty"`
    
}

type InlineResponse200Currency struct {
    CurrencyCode *string `json:"currency_code,omitempty"`
    CurrencyName *string `json:"currency_name,omitempty"`
    
}

type InlineResponse200Flag struct {
    Emoji *string `json:"emoji,omitempty"`
    Png *string `json:"png,omitempty"`
    Svg *string `json:"svg,omitempty"`
    Unicode *string `json:"unicode,omitempty"`
    
}

type InlineResponse200Security struct {
    IsVpn *bool `json:"is_vpn,omitempty"`
    
}

type InlineResponse200Timezone struct {
    Abbreviation *string `json:"abbreviation,omitempty"`
    CurrentTime *string `json:"current_time,omitempty"`
    GmtOffset *int64 `json:"gmt_offset,omitempty"`
    IsDst *bool `json:"is_dst,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type InlineResponse200 struct {
    City *string `json:"city,omitempty"`
    CityGeonameID *int64 `json:"city_geoname_id,omitempty"`
    Connection *InlineResponse200Connection `json:"connection,omitempty"`
    Continent *string `json:"continent,omitempty"`
    ContinentCode *string `json:"continent_code,omitempty"`
    ContinentGeonameID *int64 `json:"continent_geoname_id,omitempty"`
    Country *string `json:"country,omitempty"`
    CountryCode *string `json:"country_code,omitempty"`
    CountryGeonameID *int64 `json:"country_geoname_id,omitempty"`
    CountryIsEu *bool `json:"country_is_eu,omitempty"`
    Currency *InlineResponse200Currency `json:"currency,omitempty"`
    Flag *InlineResponse200Flag `json:"flag,omitempty"`
    IPAddress *string `json:"ip_address,omitempty"`
    Latitude *float64 `json:"latitude,omitempty"`
    Longitude *float64 `json:"longitude,omitempty"`
    PostalCode *string `json:"postal_code,omitempty"`
    Region *string `json:"region,omitempty"`
    RegionGeonameID *int64 `json:"region_geoname_id,omitempty"`
    RegionIsoCode *string `json:"region_iso_code,omitempty"`
    Security *InlineResponse200Security `json:"security,omitempty"`
    Timezone *InlineResponse200Timezone `json:"timezone,omitempty"`
    
}

