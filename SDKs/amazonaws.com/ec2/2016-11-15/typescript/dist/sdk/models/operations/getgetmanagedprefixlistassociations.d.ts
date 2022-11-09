import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetManagedPrefixListAssociationsActionEnum {
    GetManagedPrefixListAssociations = "GetManagedPrefixListAssociations"
}
export declare enum GetGetManagedPrefixListAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetManagedPrefixListAssociationsQueryParams extends SpeakeasyBase {
    action: GetGetManagedPrefixListAssociationsActionEnum;
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    prefixListId: string;
    version: GetGetManagedPrefixListAssociationsVersionEnum;
}
export declare class GetGetManagedPrefixListAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetManagedPrefixListAssociationsRequest extends SpeakeasyBase {
    queryParams: GetGetManagedPrefixListAssociationsQueryParams;
    headers: GetGetManagedPrefixListAssociationsHeaders;
}
export declare class GetGetManagedPrefixListAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
