import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV2VouchersVoucherCodePathParams extends SpeakeasyBase {
    voucherCode: string;
}
export declare enum GetApiV2VouchersVoucherCodeDeletedEnum {
    NotDeleted = "NotDeleted",
    Deleted = "Deleted",
    All = "All"
}
export declare class GetApiV2VouchersVoucherCodeQueryParams extends SpeakeasyBase {
    deleted?: GetApiV2VouchersVoucherCodeDeletedEnum;
}
export declare class GetApiV2VouchersVoucherCodeRequest extends SpeakeasyBase {
    pathParams: GetApiV2VouchersVoucherCodePathParams;
    queryParams: GetApiV2VouchersVoucherCodeQueryParams;
}
export declare class GetApiV2VouchersVoucherCodeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    dealerDbModelsVoucher?: shared.DealerDbModelsVoucher;
    statusCode: number;
}
