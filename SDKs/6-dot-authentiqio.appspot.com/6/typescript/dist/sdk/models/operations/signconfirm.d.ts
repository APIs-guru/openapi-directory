import { SpeakeasyBase } from "../../../internal/utils";
export declare class SignConfirmPathParams extends SpeakeasyBase {
    job: string;
}
export declare class SignConfirm202ApplicationJson extends SpeakeasyBase {
    status?: string;
}
export declare class SignConfirmRequest extends SpeakeasyBase {
    pathParams: SignConfirmPathParams;
}
export declare class SignConfirmResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    statusCode: number;
    signConfirm202ApplicationJsonObject?: SignConfirm202ApplicationJson;
}
