import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeregisterImageActionEnum {
    DeregisterImage = "DeregisterImage"
}
export declare enum PostDeregisterImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeregisterImageQueryParams extends SpeakeasyBase {
    action: PostDeregisterImageActionEnum;
    version: PostDeregisterImageVersionEnum;
}
export declare class PostDeregisterImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeregisterImageRequest extends SpeakeasyBase {
    queryParams: PostDeregisterImageQueryParams;
    headers: PostDeregisterImageHeaders;
    request?: Uint8Array;
}
export declare class PostDeregisterImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
