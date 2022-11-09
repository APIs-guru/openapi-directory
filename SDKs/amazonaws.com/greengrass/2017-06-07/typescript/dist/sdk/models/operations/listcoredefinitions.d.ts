import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListCoreDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListCoreDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCoreDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListCoreDefinitionsQueryParams;
    headers: ListCoreDefinitionsHeaders;
}
export declare class ListCoreDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    listCoreDefinitionsResponse?: shared.ListCoreDefinitionsResponse;
    statusCode: number;
}
