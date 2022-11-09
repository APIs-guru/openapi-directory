import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VouchersGetVoucherHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=VoucherCode" })
  voucherCode: string;
}


export class VouchersGetVoucherHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class VouchersGetVoucherHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VouchersGetVoucherHistoryPathParams;

  @Metadata()
  queryParams: VouchersGetVoucherHistoryQueryParams;
}


export class VouchersGetVoucherHistoryResponse extends SpeakeasyBase {
  @Metadata()
  apiPagedResponseDealerDbModelsVoucherHistory?: shared.ApiPagedResponseDealerDbModelsVoucherHistory;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
