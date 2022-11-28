import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostBatchDeleteScheduledActionActionEnum {
    BatchDeleteScheduledAction = "BatchDeleteScheduledAction"
}
export declare enum PostBatchDeleteScheduledActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostBatchDeleteScheduledActionQueryParams extends SpeakeasyBase {
    action: PostBatchDeleteScheduledActionActionEnum;
    version: PostBatchDeleteScheduledActionVersionEnum;
}
export declare class PostBatchDeleteScheduledActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostBatchDeleteScheduledActionRequest extends SpeakeasyBase {
    queryParams: PostBatchDeleteScheduledActionQueryParams;
    headers: PostBatchDeleteScheduledActionHeaders;
    request?: Uint8Array;
}
export declare class PostBatchDeleteScheduledActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
