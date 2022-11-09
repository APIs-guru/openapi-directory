import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVaultItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class CreateVaultItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class CreateVaultItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateVaultItemPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.FullItem;

  @Metadata()
  security: CreateVaultItemSecurity;
}


export class CreateVaultItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  fullItem?: shared.FullItem;

  @Metadata()
  statusCode: number;
}
