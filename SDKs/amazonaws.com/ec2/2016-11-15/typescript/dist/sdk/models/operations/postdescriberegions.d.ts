import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeRegionsActionEnum {
    DescribeRegions = "DescribeRegions"
}
export declare enum PostDescribeRegionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeRegionsQueryParams extends SpeakeasyBase {
    action: PostDescribeRegionsActionEnum;
    version: PostDescribeRegionsVersionEnum;
}
export declare class PostDescribeRegionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeRegionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeRegionsQueryParams;
    headers: PostDescribeRegionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeRegionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
