import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeTrafficMirrorSessionsActionEnum {
    DescribeTrafficMirrorSessions = "DescribeTrafficMirrorSessions"
}
export declare enum PostDescribeTrafficMirrorSessionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeTrafficMirrorSessionsQueryParams extends SpeakeasyBase {
    action: PostDescribeTrafficMirrorSessionsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeTrafficMirrorSessionsVersionEnum;
}
export declare class PostDescribeTrafficMirrorSessionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTrafficMirrorSessionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeTrafficMirrorSessionsQueryParams;
    headers: PostDescribeTrafficMirrorSessionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTrafficMirrorSessionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
