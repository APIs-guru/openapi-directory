import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateCachePolicy20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCachePolicy20200531Request extends SpeakeasyBase {
    headers: CreateCachePolicy20200531Headers;
    request: Uint8Array;
}
export declare class CreateCachePolicy20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
