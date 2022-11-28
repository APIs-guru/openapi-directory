import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateComponentXAmzTargetEnum {
    Ec2WindowsBarleyServiceUpdateComponent = "EC2WindowsBarleyService.UpdateComponent"
}
export declare class UpdateComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateComponentXAmzTargetEnum;
}
export declare class UpdateComponentRequest extends SpeakeasyBase {
    headers: UpdateComponentHeaders;
    request: shared.UpdateComponentRequest;
}
export declare class UpdateComponentResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateComponentResponse?: Map<string, any>;
    validationException?: any;
}
