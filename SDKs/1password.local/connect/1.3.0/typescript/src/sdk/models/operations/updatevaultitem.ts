import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateVaultItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class UpdateVaultItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class UpdateVaultItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateVaultItemPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.FullItemInput;

  @SpeakeasyMetadata()
  security: UpdateVaultItemSecurity;
}


export class UpdateVaultItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  fullItem?: shared.FullItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
