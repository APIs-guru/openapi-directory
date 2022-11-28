import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEnableEbsEncryptionByDefaultActionEnum {
    EnableEbsEncryptionByDefault = "EnableEbsEncryptionByDefault"
}
export declare enum GetEnableEbsEncryptionByDefaultVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetEnableEbsEncryptionByDefaultQueryParams extends SpeakeasyBase {
    action: GetEnableEbsEncryptionByDefaultActionEnum;
    dryRun?: boolean;
    version: GetEnableEbsEncryptionByDefaultVersionEnum;
}
export declare class GetEnableEbsEncryptionByDefaultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableEbsEncryptionByDefaultRequest extends SpeakeasyBase {
    queryParams: GetEnableEbsEncryptionByDefaultQueryParams;
    headers: GetEnableEbsEncryptionByDefaultHeaders;
}
export declare class GetEnableEbsEncryptionByDefaultResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
