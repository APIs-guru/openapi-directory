import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateCachePolicy20200531PathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateCachePolicy20200531Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateCachePolicy20200531Request extends SpeakeasyBase {
    pathParams: UpdateCachePolicy20200531PathParams;
    headers: UpdateCachePolicy20200531Headers;
    request: Uint8Array;
}
export declare class UpdateCachePolicy20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
