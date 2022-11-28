import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateApplicationXAmzTargetEnum {
    CodeDeploy20141006CreateApplication = "CodeDeploy_20141006.CreateApplication"
}
export declare class CreateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApplicationXAmzTargetEnum;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    headers: CreateApplicationHeaders;
    request: shared.CreateApplicationInput;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    applicationAlreadyExistsException?: any;
    applicationLimitExceededException?: any;
    applicationNameRequiredException?: any;
    contentType: string;
    createApplicationOutput?: shared.CreateApplicationOutput;
    invalidApplicationNameException?: any;
    invalidComputePlatformException?: any;
    invalidTagsToAddException?: any;
    statusCode: number;
}
