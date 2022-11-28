import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteBillingGroupPathParams extends SpeakeasyBase {
    billingGroupName: string;
}
export declare class DeleteBillingGroupQueryParams extends SpeakeasyBase {
    expectedVersion?: number;
}
export declare class DeleteBillingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBillingGroupRequest extends SpeakeasyBase {
    pathParams: DeleteBillingGroupPathParams;
    queryParams: DeleteBillingGroupQueryParams;
    headers: DeleteBillingGroupHeaders;
}
export declare class DeleteBillingGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteBillingGroupResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
    versionConflictException?: any;
}
