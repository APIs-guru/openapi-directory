import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteReportXAmzTargetEnum {
    CodeBuild20161006DeleteReport = "CodeBuild_20161006.DeleteReport"
}
export declare class DeleteReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReportXAmzTargetEnum;
}
export declare class DeleteReportRequest extends SpeakeasyBase {
    headers: DeleteReportHeaders;
    request: shared.DeleteReportInput;
}
export declare class DeleteReportResponse extends SpeakeasyBase {
    contentType: string;
    deleteReportOutput?: Map<string, any>;
    invalidInputException?: any;
    statusCode: number;
}
