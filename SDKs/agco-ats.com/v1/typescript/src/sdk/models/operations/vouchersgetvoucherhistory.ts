import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VouchersGetVoucherHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=VoucherCode" })
  voucherCode: string;
}


export class VouchersGetVoucherHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class VouchersGetVoucherHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VouchersGetVoucherHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: VouchersGetVoucherHistoryQueryParams;
}


export class VouchersGetVoucherHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiPagedResponseDealerDbModelsVoucherHistory?: shared.ApiPagedResponseDealerDbModelsVoucherHistory;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
