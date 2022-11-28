import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostBatchApplyUpdateActionActionEnum {
    BatchApplyUpdateAction = "BatchApplyUpdateAction"
}
export declare enum PostBatchApplyUpdateActionVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostBatchApplyUpdateActionQueryParams extends SpeakeasyBase {
    action: PostBatchApplyUpdateActionActionEnum;
    version: PostBatchApplyUpdateActionVersionEnum;
}
export declare class PostBatchApplyUpdateActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostBatchApplyUpdateActionRequest extends SpeakeasyBase {
    queryParams: PostBatchApplyUpdateActionQueryParams;
    headers: PostBatchApplyUpdateActionHeaders;
    request?: Uint8Array;
}
export declare class PostBatchApplyUpdateActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
