import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyUserActionEnum {
    ModifyUser = "ModifyUser"
}
export declare enum PostModifyUserVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostModifyUserQueryParams extends SpeakeasyBase {
    action: PostModifyUserActionEnum;
    version: PostModifyUserVersionEnum;
}
export declare class PostModifyUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyUserRequest extends SpeakeasyBase {
    queryParams: PostModifyUserQueryParams;
    headers: PostModifyUserHeaders;
    request?: Uint8Array;
}
export declare class PostModifyUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
