import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateUserActionEnum {
    UpdateUser = "UpdateUser"
}
export declare enum PostUpdateUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateUserQueryParams extends SpeakeasyBase {
    action: PostUpdateUserActionEnum;
    version: PostUpdateUserVersionEnum;
}
export declare class PostUpdateUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateUserRequest extends SpeakeasyBase {
    queryParams: PostUpdateUserQueryParams;
    headers: PostUpdateUserHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
