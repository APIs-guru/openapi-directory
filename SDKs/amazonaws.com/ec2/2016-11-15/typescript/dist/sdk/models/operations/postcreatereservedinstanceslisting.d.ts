import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateReservedInstancesListingActionEnum {
    CreateReservedInstancesListing = "CreateReservedInstancesListing"
}
export declare enum PostCreateReservedInstancesListingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateReservedInstancesListingQueryParams extends SpeakeasyBase {
    action: PostCreateReservedInstancesListingActionEnum;
    version: PostCreateReservedInstancesListingVersionEnum;
}
export declare class PostCreateReservedInstancesListingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateReservedInstancesListingRequest extends SpeakeasyBase {
    queryParams: PostCreateReservedInstancesListingQueryParams;
    headers: PostCreateReservedInstancesListingHeaders;
    request?: Uint8Array;
}
export declare class PostCreateReservedInstancesListingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
