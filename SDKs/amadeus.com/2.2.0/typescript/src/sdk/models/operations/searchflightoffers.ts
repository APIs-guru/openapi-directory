import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchFlightOffersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HTTP-Method-Override" })
  xHttpMethodOverride: string;
}


export class SearchFlightOffersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SearchFlightOffersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.amadeus+json" })
  request: any;
}


export class SearchFlightOffersResponse extends SpeakeasyBase {
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
