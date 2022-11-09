import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostEnableVgwRoutePropagationActionEnum {
    EnableVgwRoutePropagation = "EnableVgwRoutePropagation"
}
export declare enum PostEnableVgwRoutePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostEnableVgwRoutePropagationQueryParams extends SpeakeasyBase {
    action: PostEnableVgwRoutePropagationActionEnum;
    version: PostEnableVgwRoutePropagationVersionEnum;
}
export declare class PostEnableVgwRoutePropagationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableVgwRoutePropagationRequest extends SpeakeasyBase {
    queryParams: PostEnableVgwRoutePropagationQueryParams;
    headers: PostEnableVgwRoutePropagationHeaders;
    request?: Uint8Array;
}
export declare class PostEnableVgwRoutePropagationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
