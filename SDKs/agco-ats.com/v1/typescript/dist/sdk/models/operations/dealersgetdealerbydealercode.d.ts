import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DealersGetDealerbyDealerCodePathParams extends SpeakeasyBase {
    dealerCode: string;
}
export declare class DealersGetDealerbyDealerCodeRequest extends SpeakeasyBase {
    pathParams: DealersGetDealerbyDealerCodePathParams;
}
export declare class DealersGetDealerbyDealerCodeResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    dealerDbModelsDealer?: shared.DealerDbModelsDealer;
    statusCode: number;
}
