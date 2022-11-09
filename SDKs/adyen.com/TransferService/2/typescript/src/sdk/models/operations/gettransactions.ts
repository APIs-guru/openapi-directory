import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=accountHolderId" })
  accountHolderId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=balanceAccountId" })
  balanceAccountId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=balancePlatform" })
  balancePlatform?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdSince" })
  createdSince?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdUntil" })
  createdUntil?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetTransactionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTransactionsQueryParams;

  @Metadata()
  security: GetTransactionsSecurity;
}


export class GetTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  restServiceError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  transactionSearchResponse?: any;
}
