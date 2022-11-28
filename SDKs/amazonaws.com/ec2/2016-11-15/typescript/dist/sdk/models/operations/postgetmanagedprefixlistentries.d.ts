import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetManagedPrefixListEntriesActionEnum {
    GetManagedPrefixListEntries = "GetManagedPrefixListEntries"
}
export declare enum PostGetManagedPrefixListEntriesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetManagedPrefixListEntriesQueryParams extends SpeakeasyBase {
    action: PostGetManagedPrefixListEntriesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostGetManagedPrefixListEntriesVersionEnum;
}
export declare class PostGetManagedPrefixListEntriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetManagedPrefixListEntriesRequest extends SpeakeasyBase {
    queryParams: PostGetManagedPrefixListEntriesQueryParams;
    headers: PostGetManagedPrefixListEntriesHeaders;
    request?: Uint8Array;
}
export declare class PostGetManagedPrefixListEntriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
