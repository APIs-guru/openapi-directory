import { SpeakeasyBase } from "../../../internal/utils";
export declare class SignUpdatePathParams extends SpeakeasyBase {
    job: string;
}
export declare class SignUpdateRequest extends SpeakeasyBase {
    pathParams: SignUpdatePathParams;
}
export declare class SignUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
