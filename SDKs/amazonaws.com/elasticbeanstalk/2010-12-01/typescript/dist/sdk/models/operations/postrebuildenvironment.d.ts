import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRebuildEnvironmentActionEnum {
    RebuildEnvironment = "RebuildEnvironment"
}
export declare enum PostRebuildEnvironmentVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostRebuildEnvironmentQueryParams extends SpeakeasyBase {
    action: PostRebuildEnvironmentActionEnum;
    version: PostRebuildEnvironmentVersionEnum;
}
export declare class PostRebuildEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRebuildEnvironmentRequest extends SpeakeasyBase {
    queryParams: PostRebuildEnvironmentQueryParams;
    headers: PostRebuildEnvironmentHeaders;
    request?: Uint8Array;
}
export declare class PostRebuildEnvironmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
