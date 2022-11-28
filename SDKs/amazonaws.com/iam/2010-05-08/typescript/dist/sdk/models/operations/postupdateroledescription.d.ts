import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateRoleDescriptionActionEnum {
    UpdateRoleDescription = "UpdateRoleDescription"
}
export declare enum PostUpdateRoleDescriptionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateRoleDescriptionQueryParams extends SpeakeasyBase {
    action: PostUpdateRoleDescriptionActionEnum;
    version: PostUpdateRoleDescriptionVersionEnum;
}
export declare class PostUpdateRoleDescriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateRoleDescriptionRequest extends SpeakeasyBase {
    queryParams: PostUpdateRoleDescriptionQueryParams;
    headers: PostUpdateRoleDescriptionHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateRoleDescriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
