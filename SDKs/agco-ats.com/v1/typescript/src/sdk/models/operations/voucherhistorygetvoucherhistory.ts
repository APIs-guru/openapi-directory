import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VoucherHistoryGetVoucherHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ChangedAfter" })
  changedAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ChangedBefore" })
  changedBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VoucherCode" })
  voucherCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class VoucherHistoryGetVoucherHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VoucherHistoryGetVoucherHistoryQueryParams;
}


export class VoucherHistoryGetVoucherHistoryResponse extends SpeakeasyBase {
  @Metadata()
  apiPagedResponseDealerDbModelsVoucherHistory?: shared.ApiPagedResponseDealerDbModelsVoucherHistory;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
