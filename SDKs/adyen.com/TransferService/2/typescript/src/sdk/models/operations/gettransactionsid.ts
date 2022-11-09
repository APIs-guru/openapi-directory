import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTransactionsIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetTransactionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionsIdPathParams;

  @Metadata()
  security: GetTransactionsIdSecurity;
}


export class GetTransactionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  restServiceError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  transaction?: any;
}
