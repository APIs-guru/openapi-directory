import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFindingsReportsPathParams extends SpeakeasyBase {
    profilingGroupName: string;
}
export declare class ListFindingsReportsQueryParams extends SpeakeasyBase {
    dailyReportsOnly?: boolean;
    endTime: Date;
    maxResults?: number;
    nextToken?: string;
    startTime: Date;
}
export declare class ListFindingsReportsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFindingsReportsRequest extends SpeakeasyBase {
    pathParams: ListFindingsReportsPathParams;
    queryParams: ListFindingsReportsQueryParams;
    headers: ListFindingsReportsHeaders;
}
export declare class ListFindingsReportsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listFindingsReportsResponse?: shared.ListFindingsReportsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
