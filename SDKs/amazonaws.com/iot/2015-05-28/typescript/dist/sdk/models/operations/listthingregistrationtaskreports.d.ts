import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListThingRegistrationTaskReportsPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare enum ListThingRegistrationTaskReportsReportTypeEnum {
    Errors = "ERRORS",
    Results = "RESULTS"
}
export declare class ListThingRegistrationTaskReportsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    reportType: ListThingRegistrationTaskReportsReportTypeEnum;
}
export declare class ListThingRegistrationTaskReportsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListThingRegistrationTaskReportsRequest extends SpeakeasyBase {
    pathParams: ListThingRegistrationTaskReportsPathParams;
    queryParams: ListThingRegistrationTaskReportsQueryParams;
    headers: ListThingRegistrationTaskReportsHeaders;
}
export declare class ListThingRegistrationTaskReportsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listThingRegistrationTaskReportsResponse?: shared.ListThingRegistrationTaskReportsResponse;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
