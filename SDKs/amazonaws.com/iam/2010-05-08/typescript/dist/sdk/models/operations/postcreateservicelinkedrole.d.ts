import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateServiceLinkedRoleActionEnum {
    CreateServiceLinkedRole = "CreateServiceLinkedRole"
}
export declare enum PostCreateServiceLinkedRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostCreateServiceLinkedRoleQueryParams extends SpeakeasyBase {
    action: PostCreateServiceLinkedRoleActionEnum;
    version: PostCreateServiceLinkedRoleVersionEnum;
}
export declare class PostCreateServiceLinkedRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateServiceLinkedRoleRequest extends SpeakeasyBase {
    queryParams: PostCreateServiceLinkedRoleQueryParams;
    headers: PostCreateServiceLinkedRoleHeaders;
    request?: Uint8Array;
}
export declare class PostCreateServiceLinkedRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
