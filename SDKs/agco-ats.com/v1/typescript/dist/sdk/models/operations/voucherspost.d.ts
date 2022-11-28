import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VouchersPostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    dealerDbModelsVoucher?: shared.DealerDbModelsVoucher;
    dealerDbModelsVoucher1?: shared.DealerDbModelsVoucher;
    dealerDbModelsVoucher2?: shared.DealerDbModelsVoucher;
    textXml: Uint8Array;
}
export declare class VouchersPostRequest extends SpeakeasyBase {
    request: VouchersPostRequests;
}
export declare class VouchersPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vouchersPost200ApplicationJsonString?: string;
    vouchersPost200ApplicationXmlString?: string;
    vouchersPost200TextJsonString?: string;
    vouchersPost200TextXmlString?: string;
}
