import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateVaultItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class UpdateVaultItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class UpdateVaultItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateVaultItemPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.FullItem;

  @Metadata()
  security: UpdateVaultItemSecurity;
}


export class UpdateVaultItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  fullItem?: shared.FullItem;

  @Metadata()
  statusCode: number;
}
