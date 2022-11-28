import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListReportDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListReportDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListReportDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListReportDefinitionsQueryParams;
    headers: ListReportDefinitionsHeaders;
}
export declare class ListReportDefinitionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listReportDefinitionsResult?: shared.ListReportDefinitionsResult;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
