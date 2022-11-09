import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiActivityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetApiActivitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class GetApiActivityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiActivityQueryParams;

  @Metadata()
  security: GetApiActivitySecurity;
}


export class GetApiActivityResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ApiRequest })
  apiRequests?: shared.ApiRequest[];

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
