import { SpeakeasyBase } from "../../../internal/utils";
export declare class SignRetrievePathParams extends SpeakeasyBase {
    job: string;
}
export declare class SignRetrieveJwt extends SpeakeasyBase {
    exp?: number;
    field?: string;
    sub?: string;
}
export declare class SignRetrieveRequest extends SpeakeasyBase {
    pathParams: SignRetrievePathParams;
}
export declare class SignRetrieveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    jwt?: SignRetrieveJwt;
    statusCode: number;
}
