import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersPutCurrentUserRequests extends SpeakeasyBase {
    apiModelsUser?: shared.ApiModelsUser;
    apiModelsUser1?: shared.ApiModelsUser;
    apiModelsUser2?: shared.ApiModelsUser;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class UsersPutCurrentUserRequest extends SpeakeasyBase {
    request: UsersPutCurrentUserRequests;
}
export declare class UsersPutCurrentUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
