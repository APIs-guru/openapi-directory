import { SpeakeasyBase } from "../../../internal/utils";
export declare class SignRetrieveHeadPathParams extends SpeakeasyBase {
    job: string;
}
export declare class SignRetrieveHeadRequest extends SpeakeasyBase {
    pathParams: SignRetrieveHeadPathParams;
}
export declare class SignRetrieveHeadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    statusCode: number;
}
