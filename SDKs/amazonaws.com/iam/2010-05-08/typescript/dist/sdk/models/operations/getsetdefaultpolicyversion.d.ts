import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSetDefaultPolicyVersionActionEnum {
    SetDefaultPolicyVersion = "SetDefaultPolicyVersion"
}
export declare enum GetSetDefaultPolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetSetDefaultPolicyVersionQueryParams extends SpeakeasyBase {
    action: GetSetDefaultPolicyVersionActionEnum;
    policyArn: string;
    version: GetSetDefaultPolicyVersionVersionEnum;
    versionId: string;
}
export declare class GetSetDefaultPolicyVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetDefaultPolicyVersionRequest extends SpeakeasyBase {
    queryParams: GetSetDefaultPolicyVersionQueryParams;
    headers: GetSetDefaultPolicyVersionHeaders;
}
export declare class GetSetDefaultPolicyVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
