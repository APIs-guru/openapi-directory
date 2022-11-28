import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisableEbsEncryptionByDefaultActionEnum {
    DisableEbsEncryptionByDefault = "DisableEbsEncryptionByDefault"
}
export declare enum PostDisableEbsEncryptionByDefaultVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisableEbsEncryptionByDefaultQueryParams extends SpeakeasyBase {
    action: PostDisableEbsEncryptionByDefaultActionEnum;
    version: PostDisableEbsEncryptionByDefaultVersionEnum;
}
export declare class PostDisableEbsEncryptionByDefaultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisableEbsEncryptionByDefaultRequest extends SpeakeasyBase {
    queryParams: PostDisableEbsEncryptionByDefaultQueryParams;
    headers: PostDisableEbsEncryptionByDefaultHeaders;
    request?: Uint8Array;
}
export declare class PostDisableEbsEncryptionByDefaultResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
