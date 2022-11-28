import { SpeakeasyBase } from "../../../internal/utils";
export declare class HeadKeyPkPathParams extends SpeakeasyBase {
    pk: string;
}
export declare class HeadKeyPkRequest extends SpeakeasyBase {
    pathParams: HeadKeyPkPathParams;
}
export declare class HeadKeyPkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
