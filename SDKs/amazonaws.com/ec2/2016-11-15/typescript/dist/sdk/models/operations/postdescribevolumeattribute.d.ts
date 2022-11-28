import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeVolumeAttributeActionEnum {
    DescribeVolumeAttribute = "DescribeVolumeAttribute"
}
export declare enum PostDescribeVolumeAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVolumeAttributeQueryParams extends SpeakeasyBase {
    action: PostDescribeVolumeAttributeActionEnum;
    version: PostDescribeVolumeAttributeVersionEnum;
}
export declare class PostDescribeVolumeAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVolumeAttributeRequest extends SpeakeasyBase {
    queryParams: PostDescribeVolumeAttributeQueryParams;
    headers: PostDescribeVolumeAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVolumeAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
