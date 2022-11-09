import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetManagedPrefixListEntriesActionEnum {
    GetManagedPrefixListEntries = "GetManagedPrefixListEntries"
}
export declare enum GetGetManagedPrefixListEntriesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetManagedPrefixListEntriesQueryParams extends SpeakeasyBase {
    action: GetGetManagedPrefixListEntriesActionEnum;
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    prefixListId: string;
    targetVersion?: number;
    version: GetGetManagedPrefixListEntriesVersionEnum;
}
export declare class GetGetManagedPrefixListEntriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetManagedPrefixListEntriesRequest extends SpeakeasyBase {
    queryParams: GetGetManagedPrefixListEntriesQueryParams;
    headers: GetGetManagedPrefixListEntriesHeaders;
}
export declare class GetGetManagedPrefixListEntriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
