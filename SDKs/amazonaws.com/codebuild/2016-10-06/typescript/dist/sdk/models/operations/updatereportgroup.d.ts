import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateReportGroupXAmzTargetEnum {
    CodeBuild20161006UpdateReportGroup = "CodeBuild_20161006.UpdateReportGroup"
}
export declare class UpdateReportGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateReportGroupXAmzTargetEnum;
}
export declare class UpdateReportGroupRequest extends SpeakeasyBase {
    headers: UpdateReportGroupHeaders;
    request: shared.UpdateReportGroupInput;
}
export declare class UpdateReportGroupResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateReportGroupOutput?: shared.UpdateReportGroupOutput;
}
