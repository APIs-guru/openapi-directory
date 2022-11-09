import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListResourceDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListResourceDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListResourceDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListResourceDefinitionsQueryParams;
    headers: ListResourceDefinitionsHeaders;
}
export declare class ListResourceDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    listResourceDefinitionsResponse?: shared.ListResourceDefinitionsResponse;
    statusCode: number;
}
