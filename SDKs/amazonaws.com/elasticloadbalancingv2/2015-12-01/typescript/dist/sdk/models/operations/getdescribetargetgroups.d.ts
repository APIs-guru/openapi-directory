import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeTargetGroupsActionEnum {
    DescribeTargetGroups = "DescribeTargetGroups"
}
export declare enum GetDescribeTargetGroupsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GetDescribeTargetGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeTargetGroupsActionEnum;
    loadBalancerArn?: string;
    marker?: string;
    names?: string[];
    pageSize?: number;
    targetGroupArns?: string[];
    version: GetDescribeTargetGroupsVersionEnum;
}
export declare class GetDescribeTargetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeTargetGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeTargetGroupsQueryParams;
    headers: GetDescribeTargetGroupsHeaders;
}
export declare class GetDescribeTargetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
