import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetApplicationXAmzTargetEnum {
    CodeDeploy20141006GetApplication = "CodeDeploy_20141006.GetApplication"
}
export declare class GetApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetApplicationXAmzTargetEnum;
}
export declare class GetApplicationRequest extends SpeakeasyBase {
    headers: GetApplicationHeaders;
    request: shared.GetApplicationInput;
}
export declare class GetApplicationResponse extends SpeakeasyBase {
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    contentType: string;
    getApplicationOutput?: shared.GetApplicationOutput;
    invalidApplicationNameException?: any;
    statusCode: number;
}
