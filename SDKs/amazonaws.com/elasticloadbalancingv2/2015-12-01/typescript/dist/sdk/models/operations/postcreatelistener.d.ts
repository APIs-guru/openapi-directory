import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateListenerActionEnum {
    CreateListener = "CreateListener"
}
export declare enum PostCreateListenerVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostCreateListenerQueryParams extends SpeakeasyBase {
    action: PostCreateListenerActionEnum;
    version: PostCreateListenerVersionEnum;
}
export declare class PostCreateListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateListenerRequest extends SpeakeasyBase {
    queryParams: PostCreateListenerQueryParams;
    headers: PostCreateListenerHeaders;
    request?: Uint8Array;
}
export declare class PostCreateListenerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
