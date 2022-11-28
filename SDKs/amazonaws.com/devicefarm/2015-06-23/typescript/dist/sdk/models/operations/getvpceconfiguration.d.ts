import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetVpceConfigurationXAmzTargetEnum {
    DeviceFarm20150623GetVpceConfiguration = "DeviceFarm_20150623.GetVPCEConfiguration"
}
export declare class GetVpceConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetVpceConfigurationXAmzTargetEnum;
}
export declare class GetVpceConfigurationRequest extends SpeakeasyBase {
    headers: GetVpceConfigurationHeaders;
    request: shared.GetVpceConfigurationRequest;
}
export declare class GetVpceConfigurationResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getVpceConfigurationResult?: shared.GetVpceConfigurationResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
