import { SpeakeasyBase } from "../../../internal/utils";
export declare class KeyUpdatePathParams extends SpeakeasyBase {
    pk: string;
}
export declare class KeyUpdate200ApplicationJson extends SpeakeasyBase {
    status?: string;
}
export declare class KeyUpdateRequest extends SpeakeasyBase {
    pathParams: KeyUpdatePathParams;
    request: Uint8Array;
}
export declare class KeyUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    statusCode: number;
    keyUpdate200ApplicationJsonObject?: KeyUpdate200ApplicationJson;
}
