import { SpeakeasyBase } from "../../../internal/utils";
export declare class KeyRevokeNosecretQueryParams extends SpeakeasyBase {
    code?: string;
    email: string;
    phone: string;
}
export declare class KeyRevokeNosecret200ApplicationJson extends SpeakeasyBase {
    status?: string;
}
export declare class KeyRevokeNosecretRequest extends SpeakeasyBase {
    queryParams: KeyRevokeNosecretQueryParams;
}
export declare class KeyRevokeNosecretResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    statusCode: number;
    keyRevokeNosecret200ApplicationJsonObject?: KeyRevokeNosecret200ApplicationJson;
}
