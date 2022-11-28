import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostApplyEnvironmentManagedActionActionEnum {
    ApplyEnvironmentManagedAction = "ApplyEnvironmentManagedAction"
}
export declare enum PostApplyEnvironmentManagedActionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostApplyEnvironmentManagedActionQueryParams extends SpeakeasyBase {
    action: PostApplyEnvironmentManagedActionActionEnum;
    version: PostApplyEnvironmentManagedActionVersionEnum;
}
export declare class PostApplyEnvironmentManagedActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostApplyEnvironmentManagedActionRequest extends SpeakeasyBase {
    queryParams: PostApplyEnvironmentManagedActionQueryParams;
    headers: PostApplyEnvironmentManagedActionHeaders;
    request?: Uint8Array;
}
export declare class PostApplyEnvironmentManagedActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
