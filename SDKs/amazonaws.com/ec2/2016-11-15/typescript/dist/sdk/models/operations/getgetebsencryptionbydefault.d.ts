import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetEbsEncryptionByDefaultActionEnum {
    GetEbsEncryptionByDefault = "GetEbsEncryptionByDefault"
}
export declare enum GetGetEbsEncryptionByDefaultVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetEbsEncryptionByDefaultQueryParams extends SpeakeasyBase {
    action: GetGetEbsEncryptionByDefaultActionEnum;
    dryRun?: boolean;
    version: GetGetEbsEncryptionByDefaultVersionEnum;
}
export declare class GetGetEbsEncryptionByDefaultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetEbsEncryptionByDefaultRequest extends SpeakeasyBase {
    queryParams: GetGetEbsEncryptionByDefaultQueryParams;
    headers: GetGetEbsEncryptionByDefaultHeaders;
}
export declare class GetGetEbsEncryptionByDefaultResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
