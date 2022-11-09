import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetStatusActionEnum {
    GetStatus = "GetStatus"
}
export declare enum PostGetStatusOperationEnum {
    GetStatus = "GetStatus"
}
export declare enum PostGetStatusVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class PostGetStatusQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostGetStatusActionEnum;
    operation: PostGetStatusOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostGetStatusVersionEnum;
}
export declare class PostGetStatusRequest extends SpeakeasyBase {
    queryParams: PostGetStatusQueryParams;
    request?: Uint8Array;
}
export declare class PostGetStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
