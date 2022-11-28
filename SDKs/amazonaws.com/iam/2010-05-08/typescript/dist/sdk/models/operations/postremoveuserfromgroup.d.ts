import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRemoveUserFromGroupActionEnum {
    RemoveUserFromGroup = "RemoveUserFromGroup"
}
export declare enum PostRemoveUserFromGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostRemoveUserFromGroupQueryParams extends SpeakeasyBase {
    action: PostRemoveUserFromGroupActionEnum;
    version: PostRemoveUserFromGroupVersionEnum;
}
export declare class PostRemoveUserFromGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRemoveUserFromGroupRequest extends SpeakeasyBase {
    queryParams: PostRemoveUserFromGroupQueryParams;
    headers: PostRemoveUserFromGroupHeaders;
    request?: Uint8Array;
}
export declare class PostRemoveUserFromGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
