import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRemoveRoleFromInstanceProfileActionEnum {
    RemoveRoleFromInstanceProfile = "RemoveRoleFromInstanceProfile"
}
export declare enum PostRemoveRoleFromInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostRemoveRoleFromInstanceProfileQueryParams extends SpeakeasyBase {
    action: PostRemoveRoleFromInstanceProfileActionEnum;
    version: PostRemoveRoleFromInstanceProfileVersionEnum;
}
export declare class PostRemoveRoleFromInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRemoveRoleFromInstanceProfileRequest extends SpeakeasyBase {
    queryParams: PostRemoveRoleFromInstanceProfileQueryParams;
    headers: PostRemoveRoleFromInstanceProfileHeaders;
    request?: Uint8Array;
}
export declare class PostRemoveRoleFromInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
