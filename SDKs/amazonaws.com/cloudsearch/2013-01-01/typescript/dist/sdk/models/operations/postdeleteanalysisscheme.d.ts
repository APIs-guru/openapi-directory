import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteAnalysisSchemeActionEnum {
    DeleteAnalysisScheme = "DeleteAnalysisScheme"
}
export declare enum PostDeleteAnalysisSchemeVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDeleteAnalysisSchemeQueryParams extends SpeakeasyBase {
    action: PostDeleteAnalysisSchemeActionEnum;
    version: PostDeleteAnalysisSchemeVersionEnum;
}
export declare class PostDeleteAnalysisSchemeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteAnalysisSchemeRequest extends SpeakeasyBase {
    queryParams: PostDeleteAnalysisSchemeQueryParams;
    headers: PostDeleteAnalysisSchemeHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteAnalysisSchemeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
