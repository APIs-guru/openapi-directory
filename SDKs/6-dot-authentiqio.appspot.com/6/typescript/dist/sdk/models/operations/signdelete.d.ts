import { SpeakeasyBase } from "../../../internal/utils";
export declare class SignDeletePathParams extends SpeakeasyBase {
    job: string;
}
export declare class SignDelete200ApplicationJson extends SpeakeasyBase {
    status?: string;
}
export declare class SignDeleteRequest extends SpeakeasyBase {
    pathParams: SignDeletePathParams;
}
export declare class SignDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    statusCode: number;
    signDelete200ApplicationJsonObject?: SignDelete200ApplicationJson;
}
