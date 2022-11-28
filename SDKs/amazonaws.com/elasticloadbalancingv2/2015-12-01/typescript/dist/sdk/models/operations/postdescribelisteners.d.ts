import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeListenersActionEnum {
    DescribeListeners = "DescribeListeners"
}
export declare enum PostDescribeListenersVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostDescribeListenersQueryParams extends SpeakeasyBase {
    action: PostDescribeListenersActionEnum;
    marker?: string;
    version: PostDescribeListenersVersionEnum;
}
export declare class PostDescribeListenersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeListenersRequest extends SpeakeasyBase {
    queryParams: PostDescribeListenersQueryParams;
    headers: PostDescribeListenersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeListenersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
