import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartBlueprintRunXAmzTargetEnum {
    AwsGlueStartBlueprintRun = "AWSGlue.StartBlueprintRun"
}
export declare class StartBlueprintRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartBlueprintRunXAmzTargetEnum;
}
export declare class StartBlueprintRunRequest extends SpeakeasyBase {
    headers: StartBlueprintRunHeaders;
    request: shared.StartBlueprintRunRequest;
}
export declare class StartBlueprintRunResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    illegalBlueprintStateException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    startBlueprintRunResponse?: shared.StartBlueprintRunResponse;
    statusCode: number;
}
