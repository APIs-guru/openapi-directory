import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeIdentityIdFormatActionEnum {
    DescribeIdentityIdFormat = "DescribeIdentityIdFormat"
}
export declare enum PostDescribeIdentityIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeIdentityIdFormatQueryParams extends SpeakeasyBase {
    action: PostDescribeIdentityIdFormatActionEnum;
    version: PostDescribeIdentityIdFormatVersionEnum;
}
export declare class PostDescribeIdentityIdFormatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeIdentityIdFormatRequest extends SpeakeasyBase {
    queryParams: PostDescribeIdentityIdFormatQueryParams;
    headers: PostDescribeIdentityIdFormatHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeIdentityIdFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
