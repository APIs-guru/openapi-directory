import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyEbsDefaultKmsKeyIdActionEnum {
    ModifyEbsDefaultKmsKeyId = "ModifyEbsDefaultKmsKeyId"
}
export declare enum GetModifyEbsDefaultKmsKeyIdVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyEbsDefaultKmsKeyIdQueryParams extends SpeakeasyBase {
    action: GetModifyEbsDefaultKmsKeyIdActionEnum;
    dryRun?: boolean;
    kmsKeyId: string;
    version: GetModifyEbsDefaultKmsKeyIdVersionEnum;
}
export declare class GetModifyEbsDefaultKmsKeyIdHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyEbsDefaultKmsKeyIdRequest extends SpeakeasyBase {
    queryParams: GetModifyEbsDefaultKmsKeyIdQueryParams;
    headers: GetModifyEbsDefaultKmsKeyIdHeaders;
}
export declare class GetModifyEbsDefaultKmsKeyIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
