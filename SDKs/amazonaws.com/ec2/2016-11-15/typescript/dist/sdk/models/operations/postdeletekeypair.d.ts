import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteKeyPairActionEnum {
    DeleteKeyPair = "DeleteKeyPair"
}
export declare enum PostDeleteKeyPairVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteKeyPairQueryParams extends SpeakeasyBase {
    action: PostDeleteKeyPairActionEnum;
    version: PostDeleteKeyPairVersionEnum;
}
export declare class PostDeleteKeyPairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteKeyPairRequest extends SpeakeasyBase {
    queryParams: PostDeleteKeyPairQueryParams;
    headers: PostDeleteKeyPairHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
