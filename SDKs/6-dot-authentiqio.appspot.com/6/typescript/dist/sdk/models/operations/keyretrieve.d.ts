import { SpeakeasyBase } from "../../../internal/utils";
export declare class KeyRetrievePathParams extends SpeakeasyBase {
    pk: string;
}
export declare class KeyRetrieveJwt extends SpeakeasyBase {
    since?: Date;
    status?: string;
    sub?: string;
}
export declare class KeyRetrieveRequest extends SpeakeasyBase {
    pathParams: KeyRetrievePathParams;
}
export declare class KeyRetrieveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    jwt?: KeyRetrieveJwt;
    statusCode: number;
}
