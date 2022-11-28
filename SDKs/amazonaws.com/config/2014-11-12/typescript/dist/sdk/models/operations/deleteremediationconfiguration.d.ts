import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRemediationConfigurationXAmzTargetEnum {
    StarlingDoveServiceDeleteRemediationConfiguration = "StarlingDoveService.DeleteRemediationConfiguration"
}
export declare class DeleteRemediationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRemediationConfigurationXAmzTargetEnum;
}
export declare class DeleteRemediationConfigurationRequest extends SpeakeasyBase {
    headers: DeleteRemediationConfigurationHeaders;
    request: shared.DeleteRemediationConfigurationRequest;
}
export declare class DeleteRemediationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    deleteRemediationConfigurationResponse?: Map<string, any>;
    insufficientPermissionsException?: any;
    invalidParameterValueException?: any;
    noSuchRemediationConfigurationException?: any;
    remediationInProgressException?: any;
    statusCode: number;
}
