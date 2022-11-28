import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDefineAnalysisSchemeActionEnum {
    DefineAnalysisScheme = "DefineAnalysisScheme"
}
export declare enum PostDefineAnalysisSchemeVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDefineAnalysisSchemeQueryParams extends SpeakeasyBase {
    action: PostDefineAnalysisSchemeActionEnum;
    version: PostDefineAnalysisSchemeVersionEnum;
}
export declare class PostDefineAnalysisSchemeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDefineAnalysisSchemeRequest extends SpeakeasyBase {
    queryParams: PostDefineAnalysisSchemeQueryParams;
    headers: PostDefineAnalysisSchemeHeaders;
    request?: Uint8Array;
}
export declare class PostDefineAnalysisSchemeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
