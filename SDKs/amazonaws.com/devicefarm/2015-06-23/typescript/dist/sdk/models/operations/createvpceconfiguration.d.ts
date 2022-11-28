import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateVpceConfigurationXAmzTargetEnum {
    DeviceFarm20150623CreateVpceConfiguration = "DeviceFarm_20150623.CreateVPCEConfiguration"
}
export declare class CreateVpceConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVpceConfigurationXAmzTargetEnum;
}
export declare class CreateVpceConfigurationRequest extends SpeakeasyBase {
    headers: CreateVpceConfigurationHeaders;
    request: shared.CreateVpceConfigurationRequest;
}
export declare class CreateVpceConfigurationResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    createVpceConfigurationResult?: shared.CreateVpceConfigurationResult;
    limitExceededException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
