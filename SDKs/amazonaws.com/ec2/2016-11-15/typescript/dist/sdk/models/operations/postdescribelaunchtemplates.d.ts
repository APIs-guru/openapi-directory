import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeLaunchTemplatesActionEnum {
    DescribeLaunchTemplates = "DescribeLaunchTemplates"
}
export declare enum PostDescribeLaunchTemplatesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeLaunchTemplatesQueryParams extends SpeakeasyBase {
    action: PostDescribeLaunchTemplatesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeLaunchTemplatesVersionEnum;
}
export declare class PostDescribeLaunchTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLaunchTemplatesRequest extends SpeakeasyBase {
    queryParams: PostDescribeLaunchTemplatesQueryParams;
    headers: PostDescribeLaunchTemplatesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLaunchTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
