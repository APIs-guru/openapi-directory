import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteAnalysisSchemeActionEnum {
    DeleteAnalysisScheme = "DeleteAnalysisScheme"
}
export declare enum GetDeleteAnalysisSchemeVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetDeleteAnalysisSchemeQueryParams extends SpeakeasyBase {
    action: GetDeleteAnalysisSchemeActionEnum;
    analysisSchemeName: string;
    domainName: string;
    version: GetDeleteAnalysisSchemeVersionEnum;
}
export declare class GetDeleteAnalysisSchemeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteAnalysisSchemeRequest extends SpeakeasyBase {
    queryParams: GetDeleteAnalysisSchemeQueryParams;
    headers: GetDeleteAnalysisSchemeHeaders;
}
export declare class GetDeleteAnalysisSchemeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
