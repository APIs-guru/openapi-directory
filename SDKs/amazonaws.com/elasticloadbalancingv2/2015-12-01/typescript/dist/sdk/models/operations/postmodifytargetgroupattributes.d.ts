import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyTargetGroupAttributesActionEnum {
    ModifyTargetGroupAttributes = "ModifyTargetGroupAttributes"
}
export declare enum PostModifyTargetGroupAttributesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostModifyTargetGroupAttributesQueryParams extends SpeakeasyBase {
    action: PostModifyTargetGroupAttributesActionEnum;
    version: PostModifyTargetGroupAttributesVersionEnum;
}
export declare class PostModifyTargetGroupAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyTargetGroupAttributesRequest extends SpeakeasyBase {
    queryParams: PostModifyTargetGroupAttributesQueryParams;
    headers: PostModifyTargetGroupAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostModifyTargetGroupAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
