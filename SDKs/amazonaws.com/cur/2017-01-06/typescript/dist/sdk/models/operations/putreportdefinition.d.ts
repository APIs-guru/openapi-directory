import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutReportDefinitionXAmzTargetEnum {
    AwsOrigamiServiceGatewayServicePutReportDefinition = "AWSOrigamiServiceGatewayService.PutReportDefinition"
}
export declare class PutReportDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutReportDefinitionXAmzTargetEnum;
}
export declare class PutReportDefinitionRequest extends SpeakeasyBase {
    headers: PutReportDefinitionHeaders;
    request: shared.PutReportDefinitionRequest;
}
export declare class PutReportDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    duplicateReportNameException?: any;
    internalErrorException?: any;
    putReportDefinitionResponse?: Map<string, any>;
    reportLimitReachedException?: any;
    statusCode: number;
    validationException?: any;
}
