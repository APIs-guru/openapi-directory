import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyTargetGroupActionEnum {
    ModifyTargetGroup = "ModifyTargetGroup"
}
export declare enum PostModifyTargetGroupVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostModifyTargetGroupQueryParams extends SpeakeasyBase {
    action: PostModifyTargetGroupActionEnum;
    version: PostModifyTargetGroupVersionEnum;
}
export declare class PostModifyTargetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyTargetGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyTargetGroupQueryParams;
    headers: PostModifyTargetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyTargetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
