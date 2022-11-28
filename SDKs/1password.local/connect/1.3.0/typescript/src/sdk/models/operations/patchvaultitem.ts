import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchVaultItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class PatchVaultItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class PatchVaultItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchVaultItemPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @SpeakeasyMetadata()
  security: PatchVaultItemSecurity;
}


export class PatchVaultItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  fullItem?: shared.FullItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
