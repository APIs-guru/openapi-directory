import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeVolumesActionEnum {
    DescribeVolumes = "DescribeVolumes"
}
export declare enum PostDescribeVolumesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVolumesQueryParams extends SpeakeasyBase {
    action: PostDescribeVolumesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeVolumesVersionEnum;
}
export declare class PostDescribeVolumesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVolumesRequest extends SpeakeasyBase {
    queryParams: PostDescribeVolumesQueryParams;
    headers: PostDescribeVolumesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVolumesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
