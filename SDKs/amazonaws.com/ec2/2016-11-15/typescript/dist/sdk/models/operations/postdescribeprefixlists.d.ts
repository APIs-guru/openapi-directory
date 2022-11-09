import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribePrefixListsActionEnum {
    DescribePrefixLists = "DescribePrefixLists"
}
export declare enum PostDescribePrefixListsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribePrefixListsQueryParams extends SpeakeasyBase {
    action: PostDescribePrefixListsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribePrefixListsVersionEnum;
}
export declare class PostDescribePrefixListsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribePrefixListsRequest extends SpeakeasyBase {
    queryParams: PostDescribePrefixListsQueryParams;
    headers: PostDescribePrefixListsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribePrefixListsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
