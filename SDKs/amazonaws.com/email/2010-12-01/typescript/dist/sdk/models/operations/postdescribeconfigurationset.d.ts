import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeConfigurationSetActionEnum {
    DescribeConfigurationSet = "DescribeConfigurationSet"
}
export declare enum PostDescribeConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeConfigurationSetQueryParams extends SpeakeasyBase {
    action: PostDescribeConfigurationSetActionEnum;
    version: PostDescribeConfigurationSetVersionEnum;
}
export declare class PostDescribeConfigurationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeConfigurationSetRequest extends SpeakeasyBase {
    queryParams: PostDescribeConfigurationSetQueryParams;
    headers: PostDescribeConfigurationSetHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeConfigurationSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
