import { SpeakeasyBase } from "../../../internal/utils";
export declare class KeyRegister201ApplicationJson extends SpeakeasyBase {
    secret?: string;
    status?: string;
}
export declare class KeyRegisterRequest extends SpeakeasyBase {
    request: Uint8Array;
}
export declare class KeyRegisterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    statusCode: number;
    keyRegister201ApplicationJsonObject?: KeyRegister201ApplicationJson;
}
