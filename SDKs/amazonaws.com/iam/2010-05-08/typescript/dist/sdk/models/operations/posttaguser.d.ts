import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostTagUserActionEnum {
    TagUser = "TagUser"
}
export declare enum PostTagUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostTagUserQueryParams extends SpeakeasyBase {
    action: PostTagUserActionEnum;
    version: PostTagUserVersionEnum;
}
export declare class PostTagUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTagUserRequest extends SpeakeasyBase {
    queryParams: PostTagUserQueryParams;
    headers: PostTagUserHeaders;
    request?: Uint8Array;
}
export declare class PostTagUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
