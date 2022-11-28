import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribePlacementGroupsActionEnum {
    DescribePlacementGroups = "DescribePlacementGroups"
}
export declare enum PostDescribePlacementGroupsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribePlacementGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribePlacementGroupsActionEnum;
    version: PostDescribePlacementGroupsVersionEnum;
}
export declare class PostDescribePlacementGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribePlacementGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribePlacementGroupsQueryParams;
    headers: PostDescribePlacementGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribePlacementGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
