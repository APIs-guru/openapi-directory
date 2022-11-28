import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListReportsForReportGroupQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListReportsForReportGroupXAmzTargetEnum {
    CodeBuild20161006ListReportsForReportGroup = "CodeBuild_20161006.ListReportsForReportGroup"
}
export declare class ListReportsForReportGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReportsForReportGroupXAmzTargetEnum;
}
export declare class ListReportsForReportGroupRequest extends SpeakeasyBase {
    queryParams: ListReportsForReportGroupQueryParams;
    headers: ListReportsForReportGroupHeaders;
    request: shared.ListReportsForReportGroupInput;
}
export declare class ListReportsForReportGroupResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    listReportsForReportGroupOutput?: shared.ListReportsForReportGroupOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
