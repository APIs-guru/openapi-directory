import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutRetentionConfigurationXAmzTargetEnum {
    StarlingDoveServicePutRetentionConfiguration = "StarlingDoveService.PutRetentionConfiguration"
}
export declare class PutRetentionConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRetentionConfigurationXAmzTargetEnum;
}
export declare class PutRetentionConfigurationRequest extends SpeakeasyBase {
    headers: PutRetentionConfigurationHeaders;
    request: shared.PutRetentionConfigurationRequest;
}
export declare class PutRetentionConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    maxNumberOfRetentionConfigurationsExceededException?: any;
    putRetentionConfigurationResponse?: shared.PutRetentionConfigurationResponse;
    statusCode: number;
}
