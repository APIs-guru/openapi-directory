import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSimulateCustomPolicyActionEnum {
    SimulateCustomPolicy = "SimulateCustomPolicy"
}
export declare enum PostSimulateCustomPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostSimulateCustomPolicyQueryParams extends SpeakeasyBase {
    action: PostSimulateCustomPolicyActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostSimulateCustomPolicyVersionEnum;
}
export declare class PostSimulateCustomPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSimulateCustomPolicyRequest extends SpeakeasyBase {
    queryParams: PostSimulateCustomPolicyQueryParams;
    headers: PostSimulateCustomPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostSimulateCustomPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
