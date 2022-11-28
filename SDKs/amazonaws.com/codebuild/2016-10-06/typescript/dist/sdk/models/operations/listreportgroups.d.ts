import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListReportGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListReportGroupsXAmzTargetEnum {
    CodeBuild20161006ListReportGroups = "CodeBuild_20161006.ListReportGroups"
}
export declare class ListReportGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReportGroupsXAmzTargetEnum;
}
export declare class ListReportGroupsRequest extends SpeakeasyBase {
    queryParams: ListReportGroupsQueryParams;
    headers: ListReportGroupsHeaders;
    request: shared.ListReportGroupsInput;
}
export declare class ListReportGroupsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    listReportGroupsOutput?: shared.ListReportGroupsOutput;
    statusCode: number;
}
