import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VouchersPutPathParams extends SpeakeasyBase {
    voucherCode: string;
}
export declare class VouchersPutRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    dealerDbModelsVoucher?: shared.DealerDbModelsVoucher;
    dealerDbModelsVoucher1?: shared.DealerDbModelsVoucher;
    dealerDbModelsVoucher2?: shared.DealerDbModelsVoucher;
    textXml: Uint8Array;
}
export declare class VouchersPutRequest extends SpeakeasyBase {
    pathParams: VouchersPutPathParams;
    request: VouchersPutRequests;
}
export declare class VouchersPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
