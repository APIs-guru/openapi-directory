import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListGroupsForUserActionEnum {
    ListGroupsForUser = "ListGroupsForUser"
}
export declare enum PostListGroupsForUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListGroupsForUserQueryParams extends SpeakeasyBase {
    action: PostListGroupsForUserActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListGroupsForUserVersionEnum;
}
export declare class PostListGroupsForUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListGroupsForUserRequest extends SpeakeasyBase {
    queryParams: PostListGroupsForUserQueryParams;
    headers: PostListGroupsForUserHeaders;
    request?: Uint8Array;
}
export declare class PostListGroupsForUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
