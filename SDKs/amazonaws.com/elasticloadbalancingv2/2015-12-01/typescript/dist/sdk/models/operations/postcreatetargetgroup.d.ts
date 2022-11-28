import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateTargetGroupActionEnum {
    CreateTargetGroup = "CreateTargetGroup"
}
export declare enum PostCreateTargetGroupVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostCreateTargetGroupQueryParams extends SpeakeasyBase {
    action: PostCreateTargetGroupActionEnum;
    version: PostCreateTargetGroupVersionEnum;
}
export declare class PostCreateTargetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTargetGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateTargetGroupQueryParams;
    headers: PostCreateTargetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTargetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
