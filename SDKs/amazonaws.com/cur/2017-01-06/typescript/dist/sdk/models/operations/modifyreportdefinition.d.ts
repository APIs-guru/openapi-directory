import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ModifyReportDefinitionXAmzTargetEnum {
    AwsOrigamiServiceGatewayServiceModifyReportDefinition = "AWSOrigamiServiceGatewayService.ModifyReportDefinition"
}
export declare class ModifyReportDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyReportDefinitionXAmzTargetEnum;
}
export declare class ModifyReportDefinitionRequest extends SpeakeasyBase {
    headers: ModifyReportDefinitionHeaders;
    request: shared.ModifyReportDefinitionRequest;
}
export declare class ModifyReportDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    modifyReportDefinitionResponse?: Map<string, any>;
    statusCode: number;
    validationException?: any;
}
