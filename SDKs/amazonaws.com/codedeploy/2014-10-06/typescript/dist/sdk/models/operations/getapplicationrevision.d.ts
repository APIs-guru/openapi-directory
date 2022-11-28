import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetApplicationRevisionXAmzTargetEnum {
    CodeDeploy20141006GetApplicationRevision = "CodeDeploy_20141006.GetApplicationRevision"
}
export declare class GetApplicationRevisionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetApplicationRevisionXAmzTargetEnum;
}
export declare class GetApplicationRevisionRequest extends SpeakeasyBase {
    headers: GetApplicationRevisionHeaders;
    request: shared.GetApplicationRevisionInput;
}
export declare class GetApplicationRevisionResponse extends SpeakeasyBase {
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    contentType: string;
    getApplicationRevisionOutput?: shared.GetApplicationRevisionOutput;
    invalidApplicationNameException?: any;
    invalidRevisionException?: any;
    revisionDoesNotExistException?: any;
    revisionRequiredException?: any;
    statusCode: number;
}
