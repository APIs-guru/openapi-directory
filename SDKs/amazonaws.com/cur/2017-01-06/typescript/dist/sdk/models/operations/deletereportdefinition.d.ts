import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteReportDefinitionXAmzTargetEnum {
    AwsOrigamiServiceGatewayServiceDeleteReportDefinition = "AWSOrigamiServiceGatewayService.DeleteReportDefinition"
}
export declare class DeleteReportDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReportDefinitionXAmzTargetEnum;
}
export declare class DeleteReportDefinitionRequest extends SpeakeasyBase {
    headers: DeleteReportDefinitionHeaders;
    request: shared.DeleteReportDefinitionRequest;
}
export declare class DeleteReportDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    deleteReportDefinitionResponse?: shared.DeleteReportDefinitionResponse;
    internalErrorException?: any;
    statusCode: number;
    validationException?: any;
}
