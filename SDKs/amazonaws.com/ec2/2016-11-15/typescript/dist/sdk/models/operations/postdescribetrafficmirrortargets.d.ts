import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeTrafficMirrorTargetsActionEnum {
    DescribeTrafficMirrorTargets = "DescribeTrafficMirrorTargets"
}
export declare enum PostDescribeTrafficMirrorTargetsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeTrafficMirrorTargetsQueryParams extends SpeakeasyBase {
    action: PostDescribeTrafficMirrorTargetsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeTrafficMirrorTargetsVersionEnum;
}
export declare class PostDescribeTrafficMirrorTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTrafficMirrorTargetsRequest extends SpeakeasyBase {
    queryParams: PostDescribeTrafficMirrorTargetsQueryParams;
    headers: PostDescribeTrafficMirrorTargetsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTrafficMirrorTargetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
