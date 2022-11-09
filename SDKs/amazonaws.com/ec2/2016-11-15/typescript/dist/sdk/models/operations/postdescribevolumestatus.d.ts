import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeVolumeStatusActionEnum {
    DescribeVolumeStatus = "DescribeVolumeStatus"
}
export declare enum PostDescribeVolumeStatusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVolumeStatusQueryParams extends SpeakeasyBase {
    action: PostDescribeVolumeStatusActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeVolumeStatusVersionEnum;
}
export declare class PostDescribeVolumeStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVolumeStatusRequest extends SpeakeasyBase {
    queryParams: PostDescribeVolumeStatusQueryParams;
    headers: PostDescribeVolumeStatusHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVolumeStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
