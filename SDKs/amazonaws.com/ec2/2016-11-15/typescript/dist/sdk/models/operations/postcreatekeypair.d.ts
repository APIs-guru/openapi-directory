import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateKeyPairActionEnum {
    CreateKeyPair = "CreateKeyPair"
}
export declare enum PostCreateKeyPairVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateKeyPairQueryParams extends SpeakeasyBase {
    action: PostCreateKeyPairActionEnum;
    version: PostCreateKeyPairVersionEnum;
}
export declare class PostCreateKeyPairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateKeyPairRequest extends SpeakeasyBase {
    queryParams: PostCreateKeyPairQueryParams;
    headers: PostCreateKeyPairHeaders;
    request?: Uint8Array;
}
export declare class PostCreateKeyPairResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
