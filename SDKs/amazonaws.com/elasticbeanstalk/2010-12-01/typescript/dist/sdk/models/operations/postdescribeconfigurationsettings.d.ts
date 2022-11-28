import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeConfigurationSettingsActionEnum {
    DescribeConfigurationSettings = "DescribeConfigurationSettings"
}
export declare enum PostDescribeConfigurationSettingsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeConfigurationSettingsQueryParams extends SpeakeasyBase {
    action: PostDescribeConfigurationSettingsActionEnum;
    version: PostDescribeConfigurationSettingsVersionEnum;
}
export declare class PostDescribeConfigurationSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeConfigurationSettingsRequest extends SpeakeasyBase {
    queryParams: PostDescribeConfigurationSettingsQueryParams;
    headers: PostDescribeConfigurationSettingsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeConfigurationSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
