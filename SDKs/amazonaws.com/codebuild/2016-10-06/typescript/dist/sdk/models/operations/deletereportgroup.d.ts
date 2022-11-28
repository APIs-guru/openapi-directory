import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteReportGroupXAmzTargetEnum {
    CodeBuild20161006DeleteReportGroup = "CodeBuild_20161006.DeleteReportGroup"
}
export declare class DeleteReportGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReportGroupXAmzTargetEnum;
}
export declare class DeleteReportGroupRequest extends SpeakeasyBase {
    headers: DeleteReportGroupHeaders;
    request: shared.DeleteReportGroupInput;
}
export declare class DeleteReportGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteReportGroupOutput?: Map<string, any>;
    invalidInputException?: any;
    statusCode: number;
}
