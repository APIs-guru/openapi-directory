import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetFlightOffersTravelClassEnum {
    Economy = "ECONOMY",
    PremiumEconomy = "PREMIUM_ECONOMY",
    Business = "BUSINESS",
    First = "FIRST"
}


export class GetFlightOffersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adults" })
  adults: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=children" })
  children?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departureDate" })
  departureDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationLocationCode" })
  destinationLocationCode: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=excludedAirlineCodes" })
  excludedAirlineCodes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=includedAirlineCodes" })
  includedAirlineCodes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=infants" })
  infants?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxPrice" })
  maxPrice?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nonStop" })
  nonStop?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=originLocationCode" })
  originLocationCode: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnDate" })
  returnDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelClass" })
  travelClass?: GetFlightOffersTravelClassEnum;
}


export class GetFlightOffersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFlightOffersQueryParams;
}


export class GetFlightOffersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error400?: any;

  @SpeakeasyMetadata()
  error500?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  success?: any;
}
