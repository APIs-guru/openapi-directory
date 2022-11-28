import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetManagedPrefixListAssociationsActionEnum {
    GetManagedPrefixListAssociations = "GetManagedPrefixListAssociations"
}
export declare enum PostGetManagedPrefixListAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetManagedPrefixListAssociationsQueryParams extends SpeakeasyBase {
    action: PostGetManagedPrefixListAssociationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostGetManagedPrefixListAssociationsVersionEnum;
}
export declare class PostGetManagedPrefixListAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetManagedPrefixListAssociationsRequest extends SpeakeasyBase {
    queryParams: PostGetManagedPrefixListAssociationsQueryParams;
    headers: PostGetManagedPrefixListAssociationsHeaders;
    request?: Uint8Array;
}
export declare class PostGetManagedPrefixListAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
