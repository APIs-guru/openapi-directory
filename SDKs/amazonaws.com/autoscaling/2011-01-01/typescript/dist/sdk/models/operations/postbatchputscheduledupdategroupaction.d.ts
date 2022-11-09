import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostBatchPutScheduledUpdateGroupActionActionEnum {
    BatchPutScheduledUpdateGroupAction = "BatchPutScheduledUpdateGroupAction"
}
export declare enum PostBatchPutScheduledUpdateGroupActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostBatchPutScheduledUpdateGroupActionQueryParams extends SpeakeasyBase {
    action: PostBatchPutScheduledUpdateGroupActionActionEnum;
    version: PostBatchPutScheduledUpdateGroupActionVersionEnum;
}
export declare class PostBatchPutScheduledUpdateGroupActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostBatchPutScheduledUpdateGroupActionRequest extends SpeakeasyBase {
    queryParams: PostBatchPutScheduledUpdateGroupActionQueryParams;
    headers: PostBatchPutScheduledUpdateGroupActionHeaders;
    request?: Uint8Array;
}
export declare class PostBatchPutScheduledUpdateGroupActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
