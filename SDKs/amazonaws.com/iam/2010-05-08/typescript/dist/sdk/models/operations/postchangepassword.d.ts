import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostChangePasswordActionEnum {
    ChangePassword = "ChangePassword"
}
export declare enum PostChangePasswordVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostChangePasswordQueryParams extends SpeakeasyBase {
    action: PostChangePasswordActionEnum;
    version: PostChangePasswordVersionEnum;
}
export declare class PostChangePasswordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostChangePasswordRequest extends SpeakeasyBase {
    queryParams: PostChangePasswordQueryParams;
    headers: PostChangePasswordHeaders;
    request?: Uint8Array;
}
export declare class PostChangePasswordResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
