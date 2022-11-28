import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutRemediationConfigurationsXAmzTargetEnum {
    StarlingDoveServicePutRemediationConfigurations = "StarlingDoveService.PutRemediationConfigurations"
}
export declare class PutRemediationConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRemediationConfigurationsXAmzTargetEnum;
}
export declare class PutRemediationConfigurationsRequest extends SpeakeasyBase {
    headers: PutRemediationConfigurationsHeaders;
    request: shared.PutRemediationConfigurationsRequest;
}
export declare class PutRemediationConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    insufficientPermissionsException?: any;
    invalidParameterValueException?: any;
    putRemediationConfigurationsResponse?: shared.PutRemediationConfigurationsResponse;
    statusCode: number;
}
