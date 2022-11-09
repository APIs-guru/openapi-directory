import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateComponentConfigurationXAmzTargetEnum {
    Ec2WindowsBarleyServiceUpdateComponentConfiguration = "EC2WindowsBarleyService.UpdateComponentConfiguration"
}
export declare class UpdateComponentConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateComponentConfigurationXAmzTargetEnum;
}
export declare class UpdateComponentConfigurationRequest extends SpeakeasyBase {
    headers: UpdateComponentConfigurationHeaders;
    request: shared.UpdateComponentConfigurationRequest;
}
export declare class UpdateComponentConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateComponentConfigurationResponse?: Map<string, any>;
    validationException?: any;
}
