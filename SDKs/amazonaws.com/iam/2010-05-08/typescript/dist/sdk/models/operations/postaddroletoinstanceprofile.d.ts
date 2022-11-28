import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAddRoleToInstanceProfileActionEnum {
    AddRoleToInstanceProfile = "AddRoleToInstanceProfile"
}
export declare enum PostAddRoleToInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostAddRoleToInstanceProfileQueryParams extends SpeakeasyBase {
    action: PostAddRoleToInstanceProfileActionEnum;
    version: PostAddRoleToInstanceProfileVersionEnum;
}
export declare class PostAddRoleToInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAddRoleToInstanceProfileRequest extends SpeakeasyBase {
    queryParams: PostAddRoleToInstanceProfileQueryParams;
    headers: PostAddRoleToInstanceProfileHeaders;
    request?: Uint8Array;
}
export declare class PostAddRoleToInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
