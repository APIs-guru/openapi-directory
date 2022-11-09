import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetDescribeConfigurationSetActionEnum {
    DescribeConfigurationSet = "DescribeConfigurationSet"
}
export declare enum GetDescribeConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeConfigurationSetQueryParams extends SpeakeasyBase {
    action: GetDescribeConfigurationSetActionEnum;
    configurationSetAttributeNames?: shared.ConfigurationSetAttributeEnum[];
    configurationSetName: string;
    version: GetDescribeConfigurationSetVersionEnum;
}
export declare class GetDescribeConfigurationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeConfigurationSetRequest extends SpeakeasyBase {
    queryParams: GetDescribeConfigurationSetQueryParams;
    headers: GetDescribeConfigurationSetHeaders;
}
export declare class GetDescribeConfigurationSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
