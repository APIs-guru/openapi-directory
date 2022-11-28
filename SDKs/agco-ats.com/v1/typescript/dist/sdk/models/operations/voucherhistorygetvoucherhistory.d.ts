import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VoucherHistoryGetVoucherHistoryQueryParams extends SpeakeasyBase {
    changedAfter?: Date;
    changedBefore?: Date;
    voucherCode?: string;
    limit?: number;
    offset?: number;
}
export declare class VoucherHistoryGetVoucherHistoryRequest extends SpeakeasyBase {
    queryParams: VoucherHistoryGetVoucherHistoryQueryParams;
}
export declare class VoucherHistoryGetVoucherHistoryResponse extends SpeakeasyBase {
    apiPagedResponseDealerDbModelsVoucherHistory?: shared.ApiPagedResponseDealerDbModelsVoucherHistory;
    contentType: string;
    statusCode: number;
}
