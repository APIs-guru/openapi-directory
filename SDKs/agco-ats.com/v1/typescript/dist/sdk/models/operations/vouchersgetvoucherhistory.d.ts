import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VouchersGetVoucherHistoryPathParams extends SpeakeasyBase {
    voucherCode: string;
}
export declare class VouchersGetVoucherHistoryQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class VouchersGetVoucherHistoryRequest extends SpeakeasyBase {
    pathParams: VouchersGetVoucherHistoryPathParams;
    queryParams: VouchersGetVoucherHistoryQueryParams;
}
export declare class VouchersGetVoucherHistoryResponse extends SpeakeasyBase {
    apiPagedResponseDealerDbModelsVoucherHistory?: shared.ApiPagedResponseDealerDbModelsVoucherHistory;
    contentType: string;
    statusCode: number;
}
