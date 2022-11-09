import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeRankExpressionsActionEnum {
    DescribeRankExpressions = "DescribeRankExpressions"
}
export declare enum GetDescribeRankExpressionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetDescribeRankExpressionsQueryParams extends SpeakeasyBase {
    action: GetDescribeRankExpressionsActionEnum;
    domainName: string;
    rankNames?: string[];
    version: GetDescribeRankExpressionsVersionEnum;
}
export declare class GetDescribeRankExpressionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeRankExpressionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeRankExpressionsQueryParams;
    headers: GetDescribeRankExpressionsHeaders;
}
export declare class GetDescribeRankExpressionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
