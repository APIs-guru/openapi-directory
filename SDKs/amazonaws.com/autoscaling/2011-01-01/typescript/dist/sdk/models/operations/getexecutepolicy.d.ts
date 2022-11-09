import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetExecutePolicyActionEnum {
    ExecutePolicy = "ExecutePolicy"
}
export declare enum GetExecutePolicyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetExecutePolicyQueryParams extends SpeakeasyBase {
    action: GetExecutePolicyActionEnum;
    autoScalingGroupName?: string;
    breachThreshold?: number;
    honorCooldown?: boolean;
    metricValue?: number;
    policyName: string;
    version: GetExecutePolicyVersionEnum;
}
export declare class GetExecutePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetExecutePolicyRequest extends SpeakeasyBase {
    queryParams: GetExecutePolicyQueryParams;
    headers: GetExecutePolicyHeaders;
}
export declare class GetExecutePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
