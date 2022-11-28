import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSuiteDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListSuiteDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSuiteDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListSuiteDefinitionsQueryParams;
    headers: ListSuiteDefinitionsHeaders;
}
export declare class ListSuiteDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listSuiteDefinitionsResponse?: shared.ListSuiteDefinitionsResponse;
    statusCode: number;
    validationException?: any;
}
