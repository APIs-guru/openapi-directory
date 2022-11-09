import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAddUserToGroupActionEnum {
    AddUserToGroup = "AddUserToGroup"
}
export declare enum PostAddUserToGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostAddUserToGroupQueryParams extends SpeakeasyBase {
    action: PostAddUserToGroupActionEnum;
    version: PostAddUserToGroupVersionEnum;
}
export declare class PostAddUserToGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAddUserToGroupRequest extends SpeakeasyBase {
    queryParams: PostAddUserToGroupQueryParams;
    headers: PostAddUserToGroupHeaders;
    request?: Uint8Array;
}
export declare class PostAddUserToGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
