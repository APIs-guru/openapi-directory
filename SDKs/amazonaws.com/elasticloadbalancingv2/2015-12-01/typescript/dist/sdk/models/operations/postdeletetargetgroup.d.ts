import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteTargetGroupActionEnum {
    DeleteTargetGroup = "DeleteTargetGroup"
}
export declare enum PostDeleteTargetGroupVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostDeleteTargetGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteTargetGroupActionEnum;
    version: PostDeleteTargetGroupVersionEnum;
}
export declare class PostDeleteTargetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTargetGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteTargetGroupQueryParams;
    headers: PostDeleteTargetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTargetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
