import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersPutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UsersPutRequests extends SpeakeasyBase {
    apiModelsUser?: shared.ApiModelsUser;
    apiModelsUser1?: shared.ApiModelsUser;
    apiModelsUser2?: shared.ApiModelsUser;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class UsersPutRequest extends SpeakeasyBase {
    pathParams: UsersPutPathParams;
    request: UsersPutRequests;
}
export declare class UsersPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
