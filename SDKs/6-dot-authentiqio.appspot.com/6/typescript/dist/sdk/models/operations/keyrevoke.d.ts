import { SpeakeasyBase } from "../../../internal/utils";
export declare class KeyRevokePathParams extends SpeakeasyBase {
    pk: string;
}
export declare class KeyRevokeQueryParams extends SpeakeasyBase {
    secret: string;
}
export declare class KeyRevoke200ApplicationJson extends SpeakeasyBase {
    status?: string;
}
export declare class KeyRevokeRequest extends SpeakeasyBase {
    pathParams: KeyRevokePathParams;
    queryParams: KeyRevokeQueryParams;
}
export declare class KeyRevokeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    statusCode: number;
    keyRevoke200ApplicationJsonObject?: KeyRevoke200ApplicationJson;
}
