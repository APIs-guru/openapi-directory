import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostBatchStopUpdateActionActionEnum {
    BatchStopUpdateAction = "BatchStopUpdateAction"
}
export declare enum PostBatchStopUpdateActionVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostBatchStopUpdateActionQueryParams extends SpeakeasyBase {
    action: PostBatchStopUpdateActionActionEnum;
    version: PostBatchStopUpdateActionVersionEnum;
}
export declare class PostBatchStopUpdateActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostBatchStopUpdateActionRequest extends SpeakeasyBase {
    queryParams: PostBatchStopUpdateActionQueryParams;
    headers: PostBatchStopUpdateActionHeaders;
    request?: Uint8Array;
}
export declare class PostBatchStopUpdateActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
