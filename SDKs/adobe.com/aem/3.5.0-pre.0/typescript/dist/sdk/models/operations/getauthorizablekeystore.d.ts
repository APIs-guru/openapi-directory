import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAuthorizableKeystorePathParams extends SpeakeasyBase {
    authorizableId: string;
    intermediatePath: string;
}
export declare class GetAuthorizableKeystoreRequest extends SpeakeasyBase {
    pathParams: GetAuthorizableKeystorePathParams;
}
export declare class GetAuthorizableKeystoreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getAuthorizableKeystoreDefaultTextPlainString?: string;
}
