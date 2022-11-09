import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InlineResponse200Connection extends SpeakeasyBase {
  @Metadata({ data: "json, name=autonomous_system_number" })
  autonomousSystemNumber?: number;

  @Metadata({ data: "json, name=autonomous_system_organization" })
  autonomousSystemOrganization?: string;

  @Metadata({ data: "json, name=connection_type" })
  connectionType?: string;

  @Metadata({ data: "json, name=isp_name" })
  ispName?: string;

  @Metadata({ data: "json, name=organization_name" })
  organizationName?: string;
}


export class InlineResponse200Currency extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @Metadata({ data: "json, name=currency_name" })
  currencyName?: string;
}


export class InlineResponse200Flag extends SpeakeasyBase {
  @Metadata({ data: "json, name=emoji" })
  emoji?: string;

  @Metadata({ data: "json, name=png" })
  png?: string;

  @Metadata({ data: "json, name=svg" })
  svg?: string;

  @Metadata({ data: "json, name=unicode" })
  unicode?: string;
}


export class InlineResponse200Security extends SpeakeasyBase {
  @Metadata({ data: "json, name=is_vpn" })
  isVpn?: boolean;
}


export class InlineResponse200Timezone extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=current_time" })
  currentTime?: string;

  @Metadata({ data: "json, name=gmt_offset" })
  gmtOffset?: number;

  @Metadata({ data: "json, name=is_dst" })
  isDst?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class InlineResponse200 extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=city_geoname_id" })
  cityGeonameId?: number;

  @Metadata({ data: "json, name=connection" })
  connection?: InlineResponse200Connection;

  @Metadata({ data: "json, name=continent" })
  continent?: string;

  @Metadata({ data: "json, name=continent_code" })
  continentCode?: string;

  @Metadata({ data: "json, name=continent_geoname_id" })
  continentGeonameId?: number;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=country_code" })
  countryCode?: string;

  @Metadata({ data: "json, name=country_geoname_id" })
  countryGeonameId?: number;

  @Metadata({ data: "json, name=country_is_eu" })
  countryIsEu?: boolean;

  @Metadata({ data: "json, name=currency" })
  currency?: InlineResponse200Currency;

  @Metadata({ data: "json, name=flag" })
  flag?: InlineResponse200Flag;

  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=region_geoname_id" })
  regionGeonameId?: number;

  @Metadata({ data: "json, name=region_iso_code" })
  regionIsoCode?: string;

  @Metadata({ data: "json, name=security" })
  security?: InlineResponse200Security;

  @Metadata({ data: "json, name=timezone" })
  timezone?: InlineResponse200Timezone;
}
