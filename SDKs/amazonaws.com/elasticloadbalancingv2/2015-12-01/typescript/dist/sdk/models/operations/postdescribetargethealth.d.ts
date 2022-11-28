import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeTargetHealthActionEnum {
    DescribeTargetHealth = "DescribeTargetHealth"
}
export declare enum PostDescribeTargetHealthVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostDescribeTargetHealthQueryParams extends SpeakeasyBase {
    action: PostDescribeTargetHealthActionEnum;
    version: PostDescribeTargetHealthVersionEnum;
}
export declare class PostDescribeTargetHealthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTargetHealthRequest extends SpeakeasyBase {
    queryParams: PostDescribeTargetHealthQueryParams;
    headers: PostDescribeTargetHealthHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTargetHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
