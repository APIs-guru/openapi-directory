import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeIdFormatActionEnum {
    DescribeIdFormat = "DescribeIdFormat"
}
export declare enum PostDescribeIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeIdFormatQueryParams extends SpeakeasyBase {
    action: PostDescribeIdFormatActionEnum;
    version: PostDescribeIdFormatVersionEnum;
}
export declare class PostDescribeIdFormatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeIdFormatRequest extends SpeakeasyBase {
    queryParams: PostDescribeIdFormatQueryParams;
    headers: PostDescribeIdFormatHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeIdFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
