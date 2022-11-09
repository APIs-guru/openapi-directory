import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeletePolicyActionEnum {
    DeletePolicy = "DeletePolicy"
}
export declare enum GetDeletePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeletePolicyQueryParams extends SpeakeasyBase {
    action: GetDeletePolicyActionEnum;
    policyArn: string;
    version: GetDeletePolicyVersionEnum;
}
export declare class GetDeletePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeletePolicyRequest extends SpeakeasyBase {
    queryParams: GetDeletePolicyQueryParams;
    headers: GetDeletePolicyHeaders;
}
export declare class GetDeletePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
