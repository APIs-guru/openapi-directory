import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeVpcAttributeActionEnum {
    DescribeVpcAttribute = "DescribeVpcAttribute"
}
export declare enum GetDescribeVpcAttributeAttributeEnum {
    EnableDnsSupport = "enableDnsSupport",
    EnableDnsHostnames = "enableDnsHostnames"
}
export declare enum GetDescribeVpcAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeVpcAttributeQueryParams extends SpeakeasyBase {
    action: GetDescribeVpcAttributeActionEnum;
    attribute: GetDescribeVpcAttributeAttributeEnum;
    dryRun?: boolean;
    version: GetDescribeVpcAttributeVersionEnum;
    vpcId: string;
}
export declare class GetDescribeVpcAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeVpcAttributeRequest extends SpeakeasyBase {
    queryParams: GetDescribeVpcAttributeQueryParams;
    headers: GetDescribeVpcAttributeHeaders;
}
export declare class GetDescribeVpcAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
