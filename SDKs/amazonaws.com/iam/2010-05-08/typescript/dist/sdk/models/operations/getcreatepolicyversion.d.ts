import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreatePolicyVersionActionEnum {
    CreatePolicyVersion = "CreatePolicyVersion"
}
export declare enum GetCreatePolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetCreatePolicyVersionQueryParams extends SpeakeasyBase {
    action: GetCreatePolicyVersionActionEnum;
    policyArn: string;
    policyDocument: string;
    setAsDefault?: boolean;
    version: GetCreatePolicyVersionVersionEnum;
}
export declare class GetCreatePolicyVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreatePolicyVersionRequest extends SpeakeasyBase {
    queryParams: GetCreatePolicyVersionQueryParams;
    headers: GetCreatePolicyVersionHeaders;
}
export declare class GetCreatePolicyVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
