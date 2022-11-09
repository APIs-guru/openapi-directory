import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SuggestFormatEnum {
    Sdk = "sdk"
}
export declare enum SuggestPrettyEnum {
    True = "true"
}
export declare class SuggestQueryParams extends SpeakeasyBase {
    format: SuggestFormatEnum;
    pretty: SuggestPrettyEnum;
    q: string;
    size?: number;
    suggester: string;
}
export declare class SuggestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SuggestRequest extends SpeakeasyBase {
    queryParams: SuggestQueryParams;
    headers: SuggestHeaders;
}
export declare class SuggestResponse extends SpeakeasyBase {
    contentType: string;
    searchException?: shared.SearchException;
    statusCode: number;
    suggestResponse?: shared.SuggestResponse;
}
