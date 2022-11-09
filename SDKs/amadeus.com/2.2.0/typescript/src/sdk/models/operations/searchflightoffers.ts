import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchFlightOffersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-HTTP-Method-Override" })
  xHttpMethodOverride: string;
}


export class SearchFlightOffersRequest extends SpeakeasyBase {
  @Metadata()
  headers: SearchFlightOffersHeaders;

  @Metadata({ data: "request, media_type=application/vnd.amadeus+json" })
  request: any;
}


export class SearchFlightOffersResponse extends SpeakeasyBase {
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
