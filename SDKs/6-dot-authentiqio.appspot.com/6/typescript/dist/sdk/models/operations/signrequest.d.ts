import { SpeakeasyBase } from "../../../internal/utils";
export declare class SignRequestQueryParams extends SpeakeasyBase {
    test?: number;
}
export declare class SignRequest201ApplicationJson extends SpeakeasyBase {
    job?: string;
    status?: string;
}
export declare class SignRequestRequest extends SpeakeasyBase {
    queryParams: SignRequestQueryParams;
    request: Uint8Array;
}
export declare class SignRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    statusCode: number;
    signRequest201ApplicationJsonObject?: SignRequest201ApplicationJson;
}
