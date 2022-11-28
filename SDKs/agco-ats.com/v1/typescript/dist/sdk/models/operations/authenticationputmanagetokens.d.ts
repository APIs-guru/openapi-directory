import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthenticationPutManageTokensPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class AuthenticationPutManageTokensRequests extends SpeakeasyBase {
    apiModelsTokenOptions?: shared.ApiModelsTokenOptions;
    apiModelsTokenOptions1?: shared.ApiModelsTokenOptions;
    apiModelsTokenOptions2?: shared.ApiModelsTokenOptions;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class AuthenticationPutManageTokensRequest extends SpeakeasyBase {
    pathParams: AuthenticationPutManageTokensPathParams;
    request: AuthenticationPutManageTokensRequests;
}
export declare class AuthenticationPutManageTokensResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
