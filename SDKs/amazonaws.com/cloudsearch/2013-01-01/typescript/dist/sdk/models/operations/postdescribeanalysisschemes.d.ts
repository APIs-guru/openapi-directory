import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeAnalysisSchemesActionEnum {
    DescribeAnalysisSchemes = "DescribeAnalysisSchemes"
}
export declare enum PostDescribeAnalysisSchemesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDescribeAnalysisSchemesQueryParams extends SpeakeasyBase {
    action: PostDescribeAnalysisSchemesActionEnum;
    version: PostDescribeAnalysisSchemesVersionEnum;
}
export declare class PostDescribeAnalysisSchemesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAnalysisSchemesRequest extends SpeakeasyBase {
    queryParams: PostDescribeAnalysisSchemesQueryParams;
    headers: PostDescribeAnalysisSchemesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAnalysisSchemesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
