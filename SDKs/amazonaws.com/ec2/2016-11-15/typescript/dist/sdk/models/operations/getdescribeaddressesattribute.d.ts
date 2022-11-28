import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeAddressesAttributeActionEnum {
    DescribeAddressesAttribute = "DescribeAddressesAttribute"
}
export declare enum GetDescribeAddressesAttributeAttributeEnum {
    DomainName = "domain-name"
}
export declare enum GetDescribeAddressesAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeAddressesAttributeQueryParams extends SpeakeasyBase {
    action: GetDescribeAddressesAttributeActionEnum;
    allocationId?: string[];
    attribute?: GetDescribeAddressesAttributeAttributeEnum;
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    version: GetDescribeAddressesAttributeVersionEnum;
}
export declare class GetDescribeAddressesAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAddressesAttributeRequest extends SpeakeasyBase {
    queryParams: GetDescribeAddressesAttributeQueryParams;
    headers: GetDescribeAddressesAttributeHeaders;
}
export declare class GetDescribeAddressesAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
