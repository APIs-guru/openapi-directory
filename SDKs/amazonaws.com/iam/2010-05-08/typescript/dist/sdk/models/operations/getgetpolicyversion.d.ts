import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetPolicyVersionActionEnum {
    GetPolicyVersion = "GetPolicyVersion"
}
export declare enum GetGetPolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetPolicyVersionQueryParams extends SpeakeasyBase {
    action: GetGetPolicyVersionActionEnum;
    policyArn: string;
    version: GetGetPolicyVersionVersionEnum;
    versionId: string;
}
export declare class GetGetPolicyVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetPolicyVersionRequest extends SpeakeasyBase {
    queryParams: GetGetPolicyVersionQueryParams;
    headers: GetGetPolicyVersionHeaders;
}
export declare class GetGetPolicyVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
