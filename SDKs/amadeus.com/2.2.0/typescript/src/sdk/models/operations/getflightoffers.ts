import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetFlightOffersTravelClassEnum {
    Economy = "ECONOMY"
,    PremiumEconomy = "PREMIUM_ECONOMY"
,    Business = "BUSINESS"
,    First = "FIRST"
}


export class GetFlightOffersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=adults" })
  adults: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=children" })
  children?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=departureDate" })
  departureDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=destinationLocationCode" })
  destinationLocationCode: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=excludedAirlineCodes" })
  excludedAirlineCodes?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=includedAirlineCodes" })
  includedAirlineCodes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=infants" })
  infants?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxPrice" })
  maxPrice?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nonStop" })
  nonStop?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=originLocationCode" })
  originLocationCode: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=returnDate" })
  returnDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travelClass" })
  travelClass?: GetFlightOffersTravelClassEnum;
}


export class GetFlightOffersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFlightOffersQueryParams;
}


export class GetFlightOffersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error400?: any;

  @Metadata()
  error500?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  success?: any;
}
