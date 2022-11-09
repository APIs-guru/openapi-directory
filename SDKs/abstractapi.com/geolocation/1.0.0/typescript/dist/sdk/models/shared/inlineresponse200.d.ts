import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class InlineResponse200Connection extends SpeakeasyBase {
    autonomousSystemNumber?: number;
    autonomousSystemOrganization?: string;
    connectionType?: string;
    ispName?: string;
    organizationName?: string;
}
export declare class InlineResponse200Currency extends SpeakeasyBase {
    currencyCode?: string;
    currencyName?: string;
}
export declare class InlineResponse200Flag extends SpeakeasyBase {
    emoji?: string;
    png?: string;
    svg?: string;
    unicode?: string;
}
export declare class InlineResponse200Security extends SpeakeasyBase {
    isVpn?: boolean;
}
export declare class InlineResponse200Timezone extends SpeakeasyBase {
    abbreviation?: string;
    currentTime?: string;
    gmtOffset?: number;
    isDst?: boolean;
    name?: string;
}
export declare class InlineResponse200 extends SpeakeasyBase {
    city?: string;
    cityGeonameId?: number;
    connection?: InlineResponse200Connection;
    continent?: string;
    continentCode?: string;
    continentGeonameId?: number;
    country?: string;
    countryCode?: string;
    countryGeonameId?: number;
    countryIsEu?: boolean;
    currency?: InlineResponse200Currency;
    flag?: InlineResponse200Flag;
    ipAddress?: string;
    latitude?: number;
    longitude?: number;
    postalCode?: string;
    region?: string;
    regionGeonameId?: number;
    regionIsoCode?: string;
    security?: InlineResponse200Security;
    timezone?: InlineResponse200Timezone;
}
