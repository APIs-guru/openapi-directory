import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersPostRequests extends SpeakeasyBase {
    apiModelsUser?: shared.ApiModelsUser;
    apiModelsUser1?: shared.ApiModelsUser;
    apiModelsUser2?: shared.ApiModelsUser;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class UsersPostRequest extends SpeakeasyBase {
    request: UsersPostRequests;
}
export declare class UsersPostResponse extends SpeakeasyBase {
    apiModelsUser?: shared.ApiModelsUser;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
