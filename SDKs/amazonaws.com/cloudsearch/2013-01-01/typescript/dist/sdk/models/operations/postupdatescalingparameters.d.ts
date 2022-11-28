import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateScalingParametersActionEnum {
    UpdateScalingParameters = "UpdateScalingParameters"
}
export declare enum PostUpdateScalingParametersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostUpdateScalingParametersQueryParams extends SpeakeasyBase {
    action: PostUpdateScalingParametersActionEnum;
    version: PostUpdateScalingParametersVersionEnum;
}
export declare class PostUpdateScalingParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateScalingParametersRequest extends SpeakeasyBase {
    queryParams: PostUpdateScalingParametersQueryParams;
    headers: PostUpdateScalingParametersHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateScalingParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
