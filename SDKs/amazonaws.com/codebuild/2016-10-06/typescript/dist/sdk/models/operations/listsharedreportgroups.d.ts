import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSharedReportGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListSharedReportGroupsXAmzTargetEnum {
    CodeBuild20161006ListSharedReportGroups = "CodeBuild_20161006.ListSharedReportGroups"
}
export declare class ListSharedReportGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSharedReportGroupsXAmzTargetEnum;
}
export declare class ListSharedReportGroupsRequest extends SpeakeasyBase {
    queryParams: ListSharedReportGroupsQueryParams;
    headers: ListSharedReportGroupsHeaders;
    request: shared.ListSharedReportGroupsInput;
}
export declare class ListSharedReportGroupsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    listSharedReportGroupsOutput?: shared.ListSharedReportGroupsOutput;
    statusCode: number;
}
