import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeletePolicyVersionActionEnum {
    DeletePolicyVersion = "DeletePolicyVersion"
}
export declare enum GetDeletePolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeletePolicyVersionQueryParams extends SpeakeasyBase {
    action: GetDeletePolicyVersionActionEnum;
    policyArn: string;
    version: GetDeletePolicyVersionVersionEnum;
    versionId: string;
}
export declare class GetDeletePolicyVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeletePolicyVersionRequest extends SpeakeasyBase {
    queryParams: GetDeletePolicyVersionQueryParams;
    headers: GetDeletePolicyVersionHeaders;
}
export declare class GetDeletePolicyVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
