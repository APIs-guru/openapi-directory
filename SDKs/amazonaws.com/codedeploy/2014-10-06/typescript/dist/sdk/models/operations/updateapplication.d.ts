import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateApplicationXAmzTargetEnum {
    CodeDeploy20141006UpdateApplication = "CodeDeploy_20141006.UpdateApplication"
}
export declare class UpdateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApplicationXAmzTargetEnum;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    headers: UpdateApplicationHeaders;
    request: shared.UpdateApplicationInput;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    applicationAlreadyExistsException?: any;
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    contentType: string;
    invalidApplicationNameException?: any;
    statusCode: number;
}
