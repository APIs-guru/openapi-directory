import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteReportDefinitionPathParams extends SpeakeasyBase {
    reportId: string;
}
export declare class DeleteReportDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteReportDefinitionRequest extends SpeakeasyBase {
    pathParams: DeleteReportDefinitionPathParams;
    headers: DeleteReportDefinitionHeaders;
}
export declare class DeleteReportDefinitionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteReportDefinitionResult?: shared.DeleteReportDefinitionResult;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
