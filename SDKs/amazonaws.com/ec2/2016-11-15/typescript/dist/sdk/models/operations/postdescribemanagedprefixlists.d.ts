import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeManagedPrefixListsActionEnum {
    DescribeManagedPrefixLists = "DescribeManagedPrefixLists"
}
export declare enum PostDescribeManagedPrefixListsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeManagedPrefixListsQueryParams extends SpeakeasyBase {
    action: PostDescribeManagedPrefixListsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeManagedPrefixListsVersionEnum;
}
export declare class PostDescribeManagedPrefixListsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeManagedPrefixListsRequest extends SpeakeasyBase {
    queryParams: PostDescribeManagedPrefixListsQueryParams;
    headers: PostDescribeManagedPrefixListsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeManagedPrefixListsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
