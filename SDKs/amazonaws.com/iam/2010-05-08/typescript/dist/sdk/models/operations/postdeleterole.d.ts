import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteRoleActionEnum {
    DeleteRole = "DeleteRole"
}
export declare enum PostDeleteRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteRoleQueryParams extends SpeakeasyBase {
    action: PostDeleteRoleActionEnum;
    version: PostDeleteRoleVersionEnum;
}
export declare class PostDeleteRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteRoleRequest extends SpeakeasyBase {
    queryParams: PostDeleteRoleQueryParams;
    headers: PostDeleteRoleHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
