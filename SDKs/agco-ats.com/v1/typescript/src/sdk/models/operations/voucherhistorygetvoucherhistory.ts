import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VoucherHistoryGetVoucherHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ChangedAfter" })
  changedAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ChangedBefore" })
  changedBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VoucherCode" })
  voucherCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class VoucherHistoryGetVoucherHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VoucherHistoryGetVoucherHistoryQueryParams;
}


export class VoucherHistoryGetVoucherHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiPagedResponseDealerDbModelsVoucherHistory?: shared.ApiPagedResponseDealerDbModelsVoucherHistory;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
