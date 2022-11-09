import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeConfigurationOptionsActionEnum {
    DescribeConfigurationOptions = "DescribeConfigurationOptions"
}
export declare enum PostDescribeConfigurationOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeConfigurationOptionsQueryParams extends SpeakeasyBase {
    action: PostDescribeConfigurationOptionsActionEnum;
    version: PostDescribeConfigurationOptionsVersionEnum;
}
export declare class PostDescribeConfigurationOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeConfigurationOptionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeConfigurationOptionsQueryParams;
    headers: PostDescribeConfigurationOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeConfigurationOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
