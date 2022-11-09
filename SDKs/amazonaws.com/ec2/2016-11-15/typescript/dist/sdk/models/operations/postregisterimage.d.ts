import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRegisterImageActionEnum {
    RegisterImage = "RegisterImage"
}
export declare enum PostRegisterImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRegisterImageQueryParams extends SpeakeasyBase {
    action: PostRegisterImageActionEnum;
    version: PostRegisterImageVersionEnum;
}
export declare class PostRegisterImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRegisterImageRequest extends SpeakeasyBase {
    queryParams: PostRegisterImageQueryParams;
    headers: PostRegisterImageHeaders;
    request?: Uint8Array;
}
export declare class PostRegisterImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
