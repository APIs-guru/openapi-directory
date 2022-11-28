import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateGroupActionEnum {
    UpdateGroup = "UpdateGroup"
}
export declare enum PostUpdateGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateGroupQueryParams extends SpeakeasyBase {
    action: PostUpdateGroupActionEnum;
    version: PostUpdateGroupVersionEnum;
}
export declare class PostUpdateGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateGroupRequest extends SpeakeasyBase {
    queryParams: PostUpdateGroupQueryParams;
    headers: PostUpdateGroupHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
