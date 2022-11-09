import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDisableVgwRoutePropagationActionEnum {
    DisableVgwRoutePropagation = "DisableVgwRoutePropagation"
}
export declare enum PostDisableVgwRoutePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisableVgwRoutePropagationQueryParams extends SpeakeasyBase {
    action: PostDisableVgwRoutePropagationActionEnum;
    version: PostDisableVgwRoutePropagationVersionEnum;
}
export declare class PostDisableVgwRoutePropagationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisableVgwRoutePropagationRequest extends SpeakeasyBase {
    queryParams: PostDisableVgwRoutePropagationQueryParams;
    headers: PostDisableVgwRoutePropagationHeaders;
    request?: Uint8Array;
}
export declare class PostDisableVgwRoutePropagationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
