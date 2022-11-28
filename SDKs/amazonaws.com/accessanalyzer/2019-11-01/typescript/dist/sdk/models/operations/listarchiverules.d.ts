import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListArchiveRulesPathParams extends SpeakeasyBase {
    analyzerName: string;
}
export declare class ListArchiveRulesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListArchiveRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListArchiveRulesRequest extends SpeakeasyBase {
    pathParams: ListArchiveRulesPathParams;
    queryParams: ListArchiveRulesQueryParams;
    headers: ListArchiveRulesHeaders;
}
export declare class ListArchiveRulesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listArchiveRulesResponse?: shared.ListArchiveRulesResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
