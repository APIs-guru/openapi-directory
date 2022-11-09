import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SearchFormatEnum {
    Sdk = "sdk"
}
export declare enum SearchPrettyEnum {
    True = "true"
}
export declare enum SearchQParserEnum {
    Simple = "simple",
    Structured = "structured",
    Lucene = "lucene",
    Dismax = "dismax"
}
export declare class SearchQueryParams extends SpeakeasyBase {
    cursor?: string;
    expr?: string;
    facet?: string;
    format: SearchFormatEnum;
    fq?: string;
    highlight?: string;
    partial?: boolean;
    pretty: SearchPrettyEnum;
    q: string;
    qOptions?: string;
    qParser?: SearchQParserEnum;
    return?: string;
    size?: number;
    sort?: string;
    start?: number;
    stats?: string;
}
export declare class SearchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SearchRequest extends SpeakeasyBase {
    queryParams: SearchQueryParams;
    headers: SearchHeaders;
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    searchException?: shared.SearchException;
    searchResponse?: shared.SearchResponse;
    statusCode: number;
}
