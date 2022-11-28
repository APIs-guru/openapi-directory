import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCancelReservedInstancesListingActionEnum {
    CancelReservedInstancesListing = "CancelReservedInstancesListing"
}
export declare enum GetCancelReservedInstancesListingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCancelReservedInstancesListingQueryParams extends SpeakeasyBase {
    action: GetCancelReservedInstancesListingActionEnum;
    reservedInstancesListingId: string;
    version: GetCancelReservedInstancesListingVersionEnum;
}
export declare class GetCancelReservedInstancesListingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCancelReservedInstancesListingRequest extends SpeakeasyBase {
    queryParams: GetCancelReservedInstancesListingQueryParams;
    headers: GetCancelReservedInstancesListingHeaders;
}
export declare class GetCancelReservedInstancesListingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
