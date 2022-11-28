import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateFlowLogsActionEnum {
    CreateFlowLogs = "CreateFlowLogs"
}
export declare enum PostCreateFlowLogsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateFlowLogsQueryParams extends SpeakeasyBase {
    action: PostCreateFlowLogsActionEnum;
    version: PostCreateFlowLogsVersionEnum;
}
export declare class PostCreateFlowLogsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateFlowLogsRequest extends SpeakeasyBase {
    queryParams: PostCreateFlowLogsQueryParams;
    headers: PostCreateFlowLogsHeaders;
    request?: Uint8Array;
}
export declare class PostCreateFlowLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
