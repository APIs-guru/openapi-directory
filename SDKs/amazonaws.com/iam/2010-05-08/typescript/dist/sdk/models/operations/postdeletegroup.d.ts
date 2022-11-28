import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteGroupActionEnum {
    DeleteGroup = "DeleteGroup"
}
export declare enum PostDeleteGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteGroupActionEnum;
    version: PostDeleteGroupVersionEnum;
}
export declare class PostDeleteGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteGroupQueryParams;
    headers: PostDeleteGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
