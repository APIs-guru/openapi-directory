import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateVaultItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class CreateVaultItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class CreateVaultItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateVaultItemPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.FullItemInput;

  @SpeakeasyMetadata()
  security: CreateVaultItemSecurity;
}


export class CreateVaultItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  fullItem?: shared.FullItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
