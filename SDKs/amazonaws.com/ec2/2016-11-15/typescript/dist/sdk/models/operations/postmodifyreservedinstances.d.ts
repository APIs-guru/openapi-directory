import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyReservedInstancesActionEnum {
    ModifyReservedInstances = "ModifyReservedInstances"
}
export declare enum PostModifyReservedInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyReservedInstancesQueryParams extends SpeakeasyBase {
    action: PostModifyReservedInstancesActionEnum;
    version: PostModifyReservedInstancesVersionEnum;
}
export declare class PostModifyReservedInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyReservedInstancesRequest extends SpeakeasyBase {
    queryParams: PostModifyReservedInstancesQueryParams;
    headers: PostModifyReservedInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostModifyReservedInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
