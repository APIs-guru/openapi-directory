import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountHolderId" })
  accountHolderId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=balanceAccountId" })
  balanceAccountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=balancePlatform" })
  balancePlatform?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdSince" })
  createdSince?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdUntil" })
  createdUntil?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetTransactionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTransactionsQueryParams;

  @SpeakeasyMetadata()
  security: GetTransactionsSecurity;
}


export class GetTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  restServiceError?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transactionSearchResponse?: any;
}
