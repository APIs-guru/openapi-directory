import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCancelConversionTaskActionEnum {
    CancelConversionTask = "CancelConversionTask"
}
export declare enum PostCancelConversionTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCancelConversionTaskQueryParams extends SpeakeasyBase {
    action: PostCancelConversionTaskActionEnum;
    version: PostCancelConversionTaskVersionEnum;
}
export declare class PostCancelConversionTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCancelConversionTaskRequest extends SpeakeasyBase {
    queryParams: PostCancelConversionTaskQueryParams;
    headers: PostCancelConversionTaskHeaders;
    request?: Uint8Array;
}
export declare class PostCancelConversionTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
