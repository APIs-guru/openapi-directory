import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateRoleActionEnum {
    CreateRole = "CreateRole"
}
export declare enum PostCreateRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostCreateRoleQueryParams extends SpeakeasyBase {
    action: PostCreateRoleActionEnum;
    version: PostCreateRoleVersionEnum;
}
export declare class PostCreateRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateRoleRequest extends SpeakeasyBase {
    queryParams: PostCreateRoleQueryParams;
    headers: PostCreateRoleHeaders;
    request?: Uint8Array;
}
export declare class PostCreateRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
