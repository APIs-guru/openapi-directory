import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListVpceConfigurationsXAmzTargetEnum {
    DeviceFarm20150623ListVpceConfigurations = "DeviceFarm_20150623.ListVPCEConfigurations"
}
export declare class ListVpceConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListVpceConfigurationsXAmzTargetEnum;
}
export declare class ListVpceConfigurationsRequest extends SpeakeasyBase {
    headers: ListVpceConfigurationsHeaders;
    request: shared.ListVpceConfigurationsRequest;
}
export declare class ListVpceConfigurationsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    listVpceConfigurationsResult?: shared.ListVpceConfigurationsResult;
    serviceAccountException?: any;
    statusCode: number;
}
