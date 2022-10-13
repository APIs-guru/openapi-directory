package shared

type InlineResponse200Connection struct {
	AutonomousSystemNumber       *int64  `json:"autonomous_system_number"`
	AutonomousSystemOrganization *string `json:"autonomous_system_organization"`
	ConnectionType               *string `json:"connection_type"`
	IspName                      *string `json:"isp_name"`
	OrganizationName             *string `json:"organization_name"`
}

type InlineResponse200Currency struct {
	CurrencyCode *string `json:"currency_code"`
	CurrencyName *string `json:"currency_name"`
}

type InlineResponse200Flag struct {
	Emoji   *string `json:"emoji"`
	Png     *string `json:"png"`
	Svg     *string `json:"svg"`
	Unicode *string `json:"unicode"`
}

type InlineResponse200Security struct {
	IsVpn *bool `json:"is_vpn"`
}

type InlineResponse200Timezone struct {
	Abbreviation *string `json:"abbreviation"`
	CurrentTime  *string `json:"current_time"`
	GmtOffset    *int64  `json:"gmt_offset"`
	IsDst        *bool   `json:"is_dst"`
	Name         *string `json:"name"`
}

type InlineResponse200 struct {
	City               *string                      `json:"city"`
	CityGeonameID      *int64                       `json:"city_geoname_id"`
	Connection         *InlineResponse200Connection `json:"connection"`
	Continent          *string                      `json:"continent"`
	ContinentCode      *string                      `json:"continent_code"`
	ContinentGeonameID *int64                       `json:"continent_geoname_id"`
	Country            *string                      `json:"country"`
	CountryCode        *string                      `json:"country_code"`
	CountryGeonameID   *int64                       `json:"country_geoname_id"`
	CountryIsEu        *bool                        `json:"country_is_eu"`
	Currency           *InlineResponse200Currency   `json:"currency"`
	Flag               *InlineResponse200Flag       `json:"flag"`
	IPAddress          *string                      `json:"ip_address"`
	Latitude           *float64                     `json:"latitude"`
	Longitude          *float64                     `json:"longitude"`
	PostalCode         *string                      `json:"postal_code"`
	Region             *string                      `json:"region"`
	RegionGeonameID    *int64                       `json:"region_geoname_id"`
	RegionIsoCode      *string                      `json:"region_iso_code"`
	Security           *InlineResponse200Security   `json:"security"`
	Timezone           *InlineResponse200Timezone   `json:"timezone"`
}
