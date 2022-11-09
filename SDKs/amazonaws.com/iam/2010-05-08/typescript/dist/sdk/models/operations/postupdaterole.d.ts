import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateRoleActionEnum {
    UpdateRole = "UpdateRole"
}
export declare enum PostUpdateRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateRoleQueryParams extends SpeakeasyBase {
    action: PostUpdateRoleActionEnum;
    version: PostUpdateRoleVersionEnum;
}
export declare class PostUpdateRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateRoleRequest extends SpeakeasyBase {
    queryParams: PostUpdateRoleQueryParams;
    headers: PostUpdateRoleHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
