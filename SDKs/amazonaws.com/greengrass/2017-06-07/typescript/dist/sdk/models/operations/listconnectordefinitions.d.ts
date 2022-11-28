import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListConnectorDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListConnectorDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListConnectorDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListConnectorDefinitionsQueryParams;
    headers: ListConnectorDefinitionsHeaders;
}
export declare class ListConnectorDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    listConnectorDefinitionsResponse?: shared.ListConnectorDefinitionsResponse;
    statusCode: number;
}
