import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InlineResponse200Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autonomous_system_number" })
  autonomousSystemNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=autonomous_system_organization" })
  autonomousSystemOrganization?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_type" })
  connectionType?: string;

  @SpeakeasyMetadata({ data: "json, name=isp_name" })
  ispName?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_name" })
  organizationName?: string;
}


export class InlineResponse200Currency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=currency_name" })
  currencyName?: string;
}


export class InlineResponse200Flag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emoji" })
  emoji?: string;

  @SpeakeasyMetadata({ data: "json, name=png" })
  png?: string;

  @SpeakeasyMetadata({ data: "json, name=svg" })
  svg?: string;

  @SpeakeasyMetadata({ data: "json, name=unicode" })
  unicode?: string;
}


export class InlineResponse200Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_vpn" })
  isVpn?: boolean;
}


export class InlineResponse200Timezone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=current_time" })
  currentTime?: string;

  @SpeakeasyMetadata({ data: "json, name=gmt_offset" })
  gmtOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=is_dst" })
  isDst?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class InlineResponse200 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=city_geoname_id" })
  cityGeonameId?: number;

  @SpeakeasyMetadata({ data: "json, name=connection" })
  connection?: InlineResponse200Connection;

  @SpeakeasyMetadata({ data: "json, name=continent" })
  continent?: string;

  @SpeakeasyMetadata({ data: "json, name=continent_code" })
  continentCode?: string;

  @SpeakeasyMetadata({ data: "json, name=continent_geoname_id" })
  continentGeonameId?: number;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=country_geoname_id" })
  countryGeonameId?: number;

  @SpeakeasyMetadata({ data: "json, name=country_is_eu" })
  countryIsEu?: boolean;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: InlineResponse200Currency;

  @SpeakeasyMetadata({ data: "json, name=flag" })
  flag?: InlineResponse200Flag;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=region_geoname_id" })
  regionGeonameId?: number;

  @SpeakeasyMetadata({ data: "json, name=region_iso_code" })
  regionIsoCode?: string;

  @SpeakeasyMetadata({ data: "json, name=security" })
  security?: InlineResponse200Security;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: InlineResponse200Timezone;
}
