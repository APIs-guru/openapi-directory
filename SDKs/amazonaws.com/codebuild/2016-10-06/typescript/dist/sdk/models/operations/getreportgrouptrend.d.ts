import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetReportGroupTrendXAmzTargetEnum {
    CodeBuild20161006GetReportGroupTrend = "CodeBuild_20161006.GetReportGroupTrend"
}
export declare class GetReportGroupTrendHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetReportGroupTrendXAmzTargetEnum;
}
export declare class GetReportGroupTrendRequest extends SpeakeasyBase {
    headers: GetReportGroupTrendHeaders;
    request: shared.GetReportGroupTrendInput;
}
export declare class GetReportGroupTrendResponse extends SpeakeasyBase {
    contentType: string;
    getReportGroupTrendOutput?: shared.GetReportGroupTrendOutput;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
