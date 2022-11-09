import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetRoleActionEnum {
    GetRole = "GetRole"
}
export declare enum PostGetRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetRoleQueryParams extends SpeakeasyBase {
    action: PostGetRoleActionEnum;
    version: PostGetRoleVersionEnum;
}
export declare class PostGetRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetRoleRequest extends SpeakeasyBase {
    queryParams: PostGetRoleQueryParams;
    headers: PostGetRoleHeaders;
    request?: Uint8Array;
}
export declare class PostGetRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
