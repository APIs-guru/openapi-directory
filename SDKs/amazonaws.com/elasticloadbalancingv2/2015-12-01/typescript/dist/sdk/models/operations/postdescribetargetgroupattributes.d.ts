import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeTargetGroupAttributesActionEnum {
    DescribeTargetGroupAttributes = "DescribeTargetGroupAttributes"
}
export declare enum PostDescribeTargetGroupAttributesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostDescribeTargetGroupAttributesQueryParams extends SpeakeasyBase {
    action: PostDescribeTargetGroupAttributesActionEnum;
    version: PostDescribeTargetGroupAttributesVersionEnum;
}
export declare class PostDescribeTargetGroupAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTargetGroupAttributesRequest extends SpeakeasyBase {
    queryParams: PostDescribeTargetGroupAttributesQueryParams;
    headers: PostDescribeTargetGroupAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTargetGroupAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
