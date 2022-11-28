import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListReportsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListReportsXAmzTargetEnum {
    CodeBuild20161006ListReports = "CodeBuild_20161006.ListReports"
}
export declare class ListReportsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReportsXAmzTargetEnum;
}
export declare class ListReportsRequest extends SpeakeasyBase {
    queryParams: ListReportsQueryParams;
    headers: ListReportsHeaders;
    request: shared.ListReportsInput;
}
export declare class ListReportsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    listReportsOutput?: shared.ListReportsOutput;
    statusCode: number;
}
