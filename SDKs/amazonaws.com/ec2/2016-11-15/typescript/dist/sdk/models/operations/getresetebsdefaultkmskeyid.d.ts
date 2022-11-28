import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetResetEbsDefaultKmsKeyIdActionEnum {
    ResetEbsDefaultKmsKeyId = "ResetEbsDefaultKmsKeyId"
}
export declare enum GetResetEbsDefaultKmsKeyIdVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetResetEbsDefaultKmsKeyIdQueryParams extends SpeakeasyBase {
    action: GetResetEbsDefaultKmsKeyIdActionEnum;
    dryRun?: boolean;
    version: GetResetEbsDefaultKmsKeyIdVersionEnum;
}
export declare class GetResetEbsDefaultKmsKeyIdHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResetEbsDefaultKmsKeyIdRequest extends SpeakeasyBase {
    queryParams: GetResetEbsDefaultKmsKeyIdQueryParams;
    headers: GetResetEbsDefaultKmsKeyIdHeaders;
}
export declare class GetResetEbsDefaultKmsKeyIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
