import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSimulatePrincipalPolicyActionEnum {
    SimulatePrincipalPolicy = "SimulatePrincipalPolicy"
}
export declare enum PostSimulatePrincipalPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostSimulatePrincipalPolicyQueryParams extends SpeakeasyBase {
    action: PostSimulatePrincipalPolicyActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostSimulatePrincipalPolicyVersionEnum;
}
export declare class PostSimulatePrincipalPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSimulatePrincipalPolicyRequest extends SpeakeasyBase {
    queryParams: PostSimulatePrincipalPolicyQueryParams;
    headers: PostSimulatePrincipalPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostSimulatePrincipalPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
