import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateGroupActionEnum {
    CreateGroup = "CreateGroup"
}
export declare enum PostCreateGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostCreateGroupQueryParams extends SpeakeasyBase {
    action: PostCreateGroupActionEnum;
    version: PostCreateGroupVersionEnum;
}
export declare class PostCreateGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateGroupQueryParams;
    headers: PostCreateGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
