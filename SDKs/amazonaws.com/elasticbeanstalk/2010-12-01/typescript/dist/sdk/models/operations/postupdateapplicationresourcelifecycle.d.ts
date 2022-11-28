import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateApplicationResourceLifecycleActionEnum {
    UpdateApplicationResourceLifecycle = "UpdateApplicationResourceLifecycle"
}
export declare enum PostUpdateApplicationResourceLifecycleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateApplicationResourceLifecycleQueryParams extends SpeakeasyBase {
    action: PostUpdateApplicationResourceLifecycleActionEnum;
    version: PostUpdateApplicationResourceLifecycleVersionEnum;
}
export declare class PostUpdateApplicationResourceLifecycleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateApplicationResourceLifecycleRequest extends SpeakeasyBase {
    queryParams: PostUpdateApplicationResourceLifecycleQueryParams;
    headers: PostUpdateApplicationResourceLifecycleHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateApplicationResourceLifecycleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
