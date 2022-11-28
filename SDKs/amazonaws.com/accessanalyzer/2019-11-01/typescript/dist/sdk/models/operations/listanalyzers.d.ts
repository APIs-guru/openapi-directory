import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListAnalyzersTypeEnum {
    Account = "ACCOUNT",
    Organization = "ORGANIZATION"
}
export declare class ListAnalyzersQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    type?: ListAnalyzersTypeEnum;
}
export declare class ListAnalyzersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAnalyzersRequest extends SpeakeasyBase {
    queryParams: ListAnalyzersQueryParams;
    headers: ListAnalyzersHeaders;
}
export declare class ListAnalyzersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAnalyzersResponse?: shared.ListAnalyzersResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
