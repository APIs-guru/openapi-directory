import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeExpressionsActionEnum {
    DescribeExpressions = "DescribeExpressions"
}
export declare enum GetDescribeExpressionsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetDescribeExpressionsQueryParams extends SpeakeasyBase {
    action: GetDescribeExpressionsActionEnum;
    deployed?: boolean;
    domainName: string;
    expressionNames?: string[];
    version: GetDescribeExpressionsVersionEnum;
}
export declare class GetDescribeExpressionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeExpressionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeExpressionsQueryParams;
    headers: GetDescribeExpressionsHeaders;
}
export declare class GetDescribeExpressionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
