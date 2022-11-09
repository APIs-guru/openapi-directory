import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetGroupActionEnum {
    GetGroup = "GetGroup"
}
export declare enum PostGetGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetGroupQueryParams extends SpeakeasyBase {
    action: PostGetGroupActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostGetGroupVersionEnum;
}
export declare class PostGetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetGroupRequest extends SpeakeasyBase {
    queryParams: PostGetGroupQueryParams;
    headers: PostGetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostGetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
