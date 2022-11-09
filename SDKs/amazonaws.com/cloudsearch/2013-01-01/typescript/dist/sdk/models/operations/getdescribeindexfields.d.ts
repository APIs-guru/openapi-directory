import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeIndexFieldsActionEnum {
    DescribeIndexFields = "DescribeIndexFields"
}
export declare enum GetDescribeIndexFieldsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetDescribeIndexFieldsQueryParams extends SpeakeasyBase {
    action: GetDescribeIndexFieldsActionEnum;
    deployed?: boolean;
    domainName: string;
    fieldNames?: string[];
    version: GetDescribeIndexFieldsVersionEnum;
}
export declare class GetDescribeIndexFieldsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeIndexFieldsRequest extends SpeakeasyBase {
    queryParams: GetDescribeIndexFieldsQueryParams;
    headers: GetDescribeIndexFieldsHeaders;
}
export declare class GetDescribeIndexFieldsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
