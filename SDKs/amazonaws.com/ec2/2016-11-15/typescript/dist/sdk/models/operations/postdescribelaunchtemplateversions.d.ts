import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeLaunchTemplateVersionsActionEnum {
    DescribeLaunchTemplateVersions = "DescribeLaunchTemplateVersions"
}
export declare enum PostDescribeLaunchTemplateVersionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeLaunchTemplateVersionsQueryParams extends SpeakeasyBase {
    action: PostDescribeLaunchTemplateVersionsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeLaunchTemplateVersionsVersionEnum;
}
export declare class PostDescribeLaunchTemplateVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLaunchTemplateVersionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeLaunchTemplateVersionsQueryParams;
    headers: PostDescribeLaunchTemplateVersionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLaunchTemplateVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
