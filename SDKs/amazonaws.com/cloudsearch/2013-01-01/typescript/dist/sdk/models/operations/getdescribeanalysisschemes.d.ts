import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeAnalysisSchemesActionEnum {
    DescribeAnalysisSchemes = "DescribeAnalysisSchemes"
}
export declare enum GetDescribeAnalysisSchemesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetDescribeAnalysisSchemesQueryParams extends SpeakeasyBase {
    action: GetDescribeAnalysisSchemesActionEnum;
    analysisSchemeNames?: string[];
    deployed?: boolean;
    domainName: string;
    version: GetDescribeAnalysisSchemesVersionEnum;
}
export declare class GetDescribeAnalysisSchemesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAnalysisSchemesRequest extends SpeakeasyBase {
    queryParams: GetDescribeAnalysisSchemesQueryParams;
    headers: GetDescribeAnalysisSchemesHeaders;
}
export declare class GetDescribeAnalysisSchemesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
