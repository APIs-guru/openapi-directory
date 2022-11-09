import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostImportKeyPairActionEnum {
    ImportKeyPair = "ImportKeyPair"
}
export declare enum PostImportKeyPairVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostImportKeyPairQueryParams extends SpeakeasyBase {
    action: PostImportKeyPairActionEnum;
    version: PostImportKeyPairVersionEnum;
}
export declare class PostImportKeyPairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostImportKeyPairRequest extends SpeakeasyBase {
    queryParams: PostImportKeyPairQueryParams;
    headers: PostImportKeyPairHeaders;
    request?: Uint8Array;
}
export declare class PostImportKeyPairResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
