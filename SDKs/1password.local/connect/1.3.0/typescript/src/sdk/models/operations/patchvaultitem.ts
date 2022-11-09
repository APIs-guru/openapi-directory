import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchVaultItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class PatchVaultItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class PatchVaultItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchVaultItemPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @Metadata()
  security: PatchVaultItemSecurity;
}


export class PatchVaultItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  fullItem?: shared.FullItem;

  @Metadata()
  statusCode: number;
}
