import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteListenerActionEnum {
    DeleteListener = "DeleteListener"
}
export declare enum PostDeleteListenerVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostDeleteListenerQueryParams extends SpeakeasyBase {
    action: PostDeleteListenerActionEnum;
    version: PostDeleteListenerVersionEnum;
}
export declare class PostDeleteListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteListenerRequest extends SpeakeasyBase {
    queryParams: PostDeleteListenerQueryParams;
    headers: PostDeleteListenerHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteListenerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
