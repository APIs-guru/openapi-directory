import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateVpceConfigurationXAmzTargetEnum {
    DeviceFarm20150623UpdateVpceConfiguration = "DeviceFarm_20150623.UpdateVPCEConfiguration"
}
export declare class UpdateVpceConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateVpceConfigurationXAmzTargetEnum;
}
export declare class UpdateVpceConfigurationRequest extends SpeakeasyBase {
    headers: UpdateVpceConfigurationHeaders;
    request: shared.UpdateVpceConfigurationRequest;
}
export declare class UpdateVpceConfigurationResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    invalidOperationException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
    updateVpceConfigurationResult?: shared.UpdateVpceConfigurationResult;
}
