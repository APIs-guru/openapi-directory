import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostEnableEbsEncryptionByDefaultActionEnum {
    EnableEbsEncryptionByDefault = "EnableEbsEncryptionByDefault"
}
export declare enum PostEnableEbsEncryptionByDefaultVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostEnableEbsEncryptionByDefaultQueryParams extends SpeakeasyBase {
    action: PostEnableEbsEncryptionByDefaultActionEnum;
    version: PostEnableEbsEncryptionByDefaultVersionEnum;
}
export declare class PostEnableEbsEncryptionByDefaultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableEbsEncryptionByDefaultRequest extends SpeakeasyBase {
    queryParams: PostEnableEbsEncryptionByDefaultQueryParams;
    headers: PostEnableEbsEncryptionByDefaultHeaders;
    request?: Uint8Array;
}
export declare class PostEnableEbsEncryptionByDefaultResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
