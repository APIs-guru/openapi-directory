import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVaultItemByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class GetVaultItemByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class GetVaultItemByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVaultItemByIdPathParams;

  @Metadata()
  security: GetVaultItemByIdSecurity;
}


export class GetVaultItemByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  fullItem?: shared.FullItem;

  @Metadata()
  statusCode: number;
}
