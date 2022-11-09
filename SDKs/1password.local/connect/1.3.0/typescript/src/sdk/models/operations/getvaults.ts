import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVaultsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class GetVaultsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  connectToken: shared.SchemeConnectToken;
}


export class GetVaultsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetVaultsQueryParams;

  @Metadata()
  security: GetVaultsSecurity;
}


export class GetVaultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Vault })
  vaults?: shared.Vault[];
}
