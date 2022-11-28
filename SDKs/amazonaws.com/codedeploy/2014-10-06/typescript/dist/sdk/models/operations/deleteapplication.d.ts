import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteApplicationXAmzTargetEnum {
    CodeDeploy20141006DeleteApplication = "CodeDeploy_20141006.DeleteApplication"
}
export declare class DeleteApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationXAmzTargetEnum;
}
export declare class DeleteApplicationRequest extends SpeakeasyBase {
    headers: DeleteApplicationHeaders;
    request: shared.DeleteApplicationInput;
}
export declare class DeleteApplicationResponse extends SpeakeasyBase {
    applicationNameRequiredException?: any;
    contentType: string;
    invalidApplicationNameException?: any;
    invalidRoleException?: any;
    statusCode: number;
}
