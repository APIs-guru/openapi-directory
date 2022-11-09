import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDelegationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class GetDelegationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDelegationsRequest extends SpeakeasyBase {
    queryParams: GetDelegationsQueryParams;
    headers: GetDelegationsHeaders;
}
export declare class GetDelegationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getDelegationsResponse?: shared.GetDelegationsResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
