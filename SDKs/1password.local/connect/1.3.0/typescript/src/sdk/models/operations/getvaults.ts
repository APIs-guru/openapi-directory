import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVaultsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetVaultsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class GetVaultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVaultsQueryParams;

  @SpeakeasyMetadata()
  security: GetVaultsSecurity;
}


export class GetVaultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Vault })
  vaults?: shared.Vault[];
}
