import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateBlueprintXAmzTargetEnum {
    AwsGlueCreateBlueprint = "AWSGlue.CreateBlueprint"
}
export declare class CreateBlueprintHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBlueprintXAmzTargetEnum;
}
export declare class CreateBlueprintRequest extends SpeakeasyBase {
    headers: CreateBlueprintHeaders;
    request: shared.CreateBlueprintRequest;
}
export declare class CreateBlueprintResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    contentType: string;
    createBlueprintResponse?: shared.CreateBlueprintResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
