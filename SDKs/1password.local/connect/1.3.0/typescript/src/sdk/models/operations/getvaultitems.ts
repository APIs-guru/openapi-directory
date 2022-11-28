import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVaultItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" })
  vaultUuid: string;
}


export class GetVaultItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetVaultItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class GetVaultItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVaultItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVaultItemsQueryParams;

  @SpeakeasyMetadata()
  security: GetVaultItemsSecurity;
}


export class GetVaultItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.Item })
  items?: shared.Item[];

  @SpeakeasyMetadata()
  statusCode: number;
}
