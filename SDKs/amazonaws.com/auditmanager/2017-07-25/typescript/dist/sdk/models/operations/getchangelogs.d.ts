import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChangeLogsPathParams extends SpeakeasyBase {
    assessmentId: string;
}
export declare class GetChangeLogsQueryParams extends SpeakeasyBase {
    controlId?: string;
    controlSetId?: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class GetChangeLogsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetChangeLogsRequest extends SpeakeasyBase {
    pathParams: GetChangeLogsPathParams;
    queryParams: GetChangeLogsQueryParams;
    headers: GetChangeLogsHeaders;
}
export declare class GetChangeLogsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getChangeLogsResponse?: shared.GetChangeLogsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
