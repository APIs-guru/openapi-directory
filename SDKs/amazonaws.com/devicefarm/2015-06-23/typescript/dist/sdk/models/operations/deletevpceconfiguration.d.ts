import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteVpceConfigurationXAmzTargetEnum {
    DeviceFarm20150623DeleteVpceConfiguration = "DeviceFarm_20150623.DeleteVPCEConfiguration"
}
export declare class DeleteVpceConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVpceConfigurationXAmzTargetEnum;
}
export declare class DeleteVpceConfigurationRequest extends SpeakeasyBase {
    headers: DeleteVpceConfigurationHeaders;
    request: shared.DeleteVpceConfigurationRequest;
}
export declare class DeleteVpceConfigurationResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    deleteVpceConfigurationResult?: Map<string, any>;
    invalidOperationException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
