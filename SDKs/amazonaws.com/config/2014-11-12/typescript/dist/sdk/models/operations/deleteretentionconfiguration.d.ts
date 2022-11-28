import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRetentionConfigurationXAmzTargetEnum {
    StarlingDoveServiceDeleteRetentionConfiguration = "StarlingDoveService.DeleteRetentionConfiguration"
}
export declare class DeleteRetentionConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRetentionConfigurationXAmzTargetEnum;
}
export declare class DeleteRetentionConfigurationRequest extends SpeakeasyBase {
    headers: DeleteRetentionConfigurationHeaders;
    request: shared.DeleteRetentionConfigurationRequest;
}
export declare class DeleteRetentionConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    noSuchRetentionConfigurationException?: any;
    statusCode: number;
}
