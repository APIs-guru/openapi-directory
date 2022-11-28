import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetEbsDefaultKmsKeyIdActionEnum {
    GetEbsDefaultKmsKeyId = "GetEbsDefaultKmsKeyId"
}
export declare enum GetGetEbsDefaultKmsKeyIdVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetEbsDefaultKmsKeyIdQueryParams extends SpeakeasyBase {
    action: GetGetEbsDefaultKmsKeyIdActionEnum;
    dryRun?: boolean;
    version: GetGetEbsDefaultKmsKeyIdVersionEnum;
}
export declare class GetGetEbsDefaultKmsKeyIdHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetEbsDefaultKmsKeyIdRequest extends SpeakeasyBase {
    queryParams: GetGetEbsDefaultKmsKeyIdQueryParams;
    headers: GetGetEbsDefaultKmsKeyIdHeaders;
}
export declare class GetGetEbsDefaultKmsKeyIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
