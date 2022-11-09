import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteFlowLogsActionEnum {
    DeleteFlowLogs = "DeleteFlowLogs"
}
export declare enum PostDeleteFlowLogsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteFlowLogsQueryParams extends SpeakeasyBase {
    action: PostDeleteFlowLogsActionEnum;
    version: PostDeleteFlowLogsVersionEnum;
}
export declare class PostDeleteFlowLogsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteFlowLogsRequest extends SpeakeasyBase {
    queryParams: PostDeleteFlowLogsQueryParams;
    headers: PostDeleteFlowLogsHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteFlowLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
