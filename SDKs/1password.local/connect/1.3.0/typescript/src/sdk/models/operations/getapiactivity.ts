import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiActivityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetApiActivitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class GetApiActivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiActivityQueryParams;

  @SpeakeasyMetadata()
  security: GetApiActivitySecurity;
}


export class GetApiActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ApiRequest })
  apiRequests?: shared.ApiRequest[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
