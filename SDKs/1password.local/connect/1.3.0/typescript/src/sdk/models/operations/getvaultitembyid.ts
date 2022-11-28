import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVaultItemByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class GetVaultItemByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class GetVaultItemByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVaultItemByIdPathParams;

  @SpeakeasyMetadata()
  security: GetVaultItemByIdSecurity;
}


export class GetVaultItemByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  fullItem?: shared.FullItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
