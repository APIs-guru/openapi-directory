import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetEbsEncryptionByDefaultActionEnum {
    GetEbsEncryptionByDefault = "GetEbsEncryptionByDefault"
}
export declare enum PostGetEbsEncryptionByDefaultVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetEbsEncryptionByDefaultQueryParams extends SpeakeasyBase {
    action: PostGetEbsEncryptionByDefaultActionEnum;
    version: PostGetEbsEncryptionByDefaultVersionEnum;
}
export declare class PostGetEbsEncryptionByDefaultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetEbsEncryptionByDefaultRequest extends SpeakeasyBase {
    queryParams: PostGetEbsEncryptionByDefaultQueryParams;
    headers: PostGetEbsEncryptionByDefaultHeaders;
    request?: Uint8Array;
}
export declare class PostGetEbsEncryptionByDefaultResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
