import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVaultItemsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class GetVaultItemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetVaultItemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class GetVaultItemsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVaultItemsPathParams;

  @Metadata()
  queryParams: GetVaultItemsQueryParams;

  @Metadata()
  security: GetVaultItemsSecurity;
}


export class GetVaultItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata({ elemType: shared.Item })
  items?: shared.Item[];

  @Metadata()
  statusCode: number;
}
