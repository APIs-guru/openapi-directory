import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteAutoScalingGroupActionEnum {
    DeleteAutoScalingGroup = "DeleteAutoScalingGroup"
}
export declare enum GetDeleteAutoScalingGroupVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDeleteAutoScalingGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteAutoScalingGroupActionEnum;
    autoScalingGroupName: string;
    forceDelete?: boolean;
    version: GetDeleteAutoScalingGroupVersionEnum;
}
export declare class GetDeleteAutoScalingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteAutoScalingGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteAutoScalingGroupQueryParams;
    headers: GetDeleteAutoScalingGroupHeaders;
}
export declare class GetDeleteAutoScalingGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
