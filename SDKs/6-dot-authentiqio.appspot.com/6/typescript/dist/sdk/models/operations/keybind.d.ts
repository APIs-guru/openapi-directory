import { SpeakeasyBase } from "../../../internal/utils";
export declare class KeyBindPathParams extends SpeakeasyBase {
    pk: string;
}
export declare class KeyBind200ApplicationJson extends SpeakeasyBase {
    status?: string;
}
export declare class KeyBindRequest extends SpeakeasyBase {
    pathParams: KeyBindPathParams;
    request: Uint8Array;
}
export declare class KeyBindResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    statusCode: number;
    keyBind200ApplicationJsonObject?: KeyBind200ApplicationJson;
}
