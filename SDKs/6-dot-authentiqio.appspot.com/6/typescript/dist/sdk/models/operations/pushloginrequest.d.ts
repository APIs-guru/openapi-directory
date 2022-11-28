import { SpeakeasyBase } from "../../../internal/utils";
export declare class PushLoginRequestQueryParams extends SpeakeasyBase {
    callback: string;
}
export declare class PushLoginRequest200ApplicationJson extends SpeakeasyBase {
    status?: string;
}
export declare class PushLoginRequestRequest extends SpeakeasyBase {
    queryParams: PushLoginRequestQueryParams;
    request: Uint8Array;
}
export declare class PushLoginRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    statusCode: number;
    pushLoginRequest200ApplicationJsonObject?: PushLoginRequest200ApplicationJson;
}
