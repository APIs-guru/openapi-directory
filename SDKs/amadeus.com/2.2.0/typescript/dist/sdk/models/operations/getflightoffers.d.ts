import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetFlightOffersTravelClassEnum {
    Economy = "ECONOMY",
    PremiumEconomy = "PREMIUM_ECONOMY",
    Business = "BUSINESS",
    First = "FIRST"
}
export declare class GetFlightOffersQueryParams extends SpeakeasyBase {
    adults: number;
    children?: number;
    currencyCode?: string;
    departureDate: Date;
    destinationLocationCode: string;
    excludedAirlineCodes?: string;
    includedAirlineCodes?: string;
    infants?: number;
    max?: number;
    maxPrice?: number;
    nonStop?: boolean;
    originLocationCode: string;
    returnDate?: Date;
    travelClass?: GetFlightOffersTravelClassEnum;
}
export declare class GetFlightOffersRequest extends SpeakeasyBase {
    queryParams: GetFlightOffersQueryParams;
}
export declare class GetFlightOffersResponse extends SpeakeasyBase {
    contentType: string;
    error400?: any;
    error500?: any;
    statusCode: number;
    success?: any;
}
