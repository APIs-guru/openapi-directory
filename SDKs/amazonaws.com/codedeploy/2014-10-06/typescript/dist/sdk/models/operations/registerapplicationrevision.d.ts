import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterApplicationRevisionXAmzTargetEnum {
    CodeDeploy20141006RegisterApplicationRevision = "CodeDeploy_20141006.RegisterApplicationRevision"
}
export declare class RegisterApplicationRevisionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterApplicationRevisionXAmzTargetEnum;
}
export declare class RegisterApplicationRevisionRequest extends SpeakeasyBase {
    headers: RegisterApplicationRevisionHeaders;
    request: shared.RegisterApplicationRevisionInput;
}
export declare class RegisterApplicationRevisionResponse extends SpeakeasyBase {
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    contentType: string;
    descriptionTooLongException?: any;
    invalidApplicationNameException?: any;
    invalidRevisionException?: any;
    revisionRequiredException?: any;
    statusCode: number;
}
