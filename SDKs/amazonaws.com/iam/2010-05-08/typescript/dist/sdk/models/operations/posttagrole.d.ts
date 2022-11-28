import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTagRoleActionEnum {
    TagRole = "TagRole"
}
export declare enum PostTagRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostTagRoleQueryParams extends SpeakeasyBase {
    action: PostTagRoleActionEnum;
    version: PostTagRoleVersionEnum;
}
export declare class PostTagRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTagRoleRequest extends SpeakeasyBase {
    queryParams: PostTagRoleQueryParams;
    headers: PostTagRoleHeaders;
    request?: Uint8Array;
}
export declare class PostTagRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
