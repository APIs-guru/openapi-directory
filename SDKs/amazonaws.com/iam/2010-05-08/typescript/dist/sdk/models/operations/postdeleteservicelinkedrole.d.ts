import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteServiceLinkedRoleActionEnum {
    DeleteServiceLinkedRole = "DeleteServiceLinkedRole"
}
export declare enum PostDeleteServiceLinkedRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteServiceLinkedRoleQueryParams extends SpeakeasyBase {
    action: PostDeleteServiceLinkedRoleActionEnum;
    version: PostDeleteServiceLinkedRoleVersionEnum;
}
export declare class PostDeleteServiceLinkedRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteServiceLinkedRoleRequest extends SpeakeasyBase {
    queryParams: PostDeleteServiceLinkedRoleQueryParams;
    headers: PostDeleteServiceLinkedRoleHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteServiceLinkedRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
