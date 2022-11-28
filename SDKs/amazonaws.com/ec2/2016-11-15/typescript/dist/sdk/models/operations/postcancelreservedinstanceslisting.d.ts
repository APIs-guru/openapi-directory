import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCancelReservedInstancesListingActionEnum {
    CancelReservedInstancesListing = "CancelReservedInstancesListing"
}
export declare enum PostCancelReservedInstancesListingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCancelReservedInstancesListingQueryParams extends SpeakeasyBase {
    action: PostCancelReservedInstancesListingActionEnum;
    version: PostCancelReservedInstancesListingVersionEnum;
}
export declare class PostCancelReservedInstancesListingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCancelReservedInstancesListingRequest extends SpeakeasyBase {
    queryParams: PostCancelReservedInstancesListingQueryParams;
    headers: PostCancelReservedInstancesListingHeaders;
    request?: Uint8Array;
}
export declare class PostCancelReservedInstancesListingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
