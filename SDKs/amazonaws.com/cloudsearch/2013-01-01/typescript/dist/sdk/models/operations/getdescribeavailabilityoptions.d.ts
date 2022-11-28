import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeAvailabilityOptionsActionEnum {
    DescribeAvailabilityOptions = "DescribeAvailabilityOptions"
}
export declare enum GetDescribeAvailabilityOptionsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetDescribeAvailabilityOptionsQueryParams extends SpeakeasyBase {
    action: GetDescribeAvailabilityOptionsActionEnum;
    deployed?: boolean;
    domainName: string;
    version: GetDescribeAvailabilityOptionsVersionEnum;
}
export declare class GetDescribeAvailabilityOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAvailabilityOptionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeAvailabilityOptionsQueryParams;
    headers: GetDescribeAvailabilityOptionsHeaders;
}
export declare class GetDescribeAvailabilityOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
