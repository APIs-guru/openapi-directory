import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateBlueprintXAmzTargetEnum {
    AwsGlueUpdateBlueprint = "AWSGlue.UpdateBlueprint"
}
export declare class UpdateBlueprintHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateBlueprintXAmzTargetEnum;
}
export declare class UpdateBlueprintRequest extends SpeakeasyBase {
    headers: UpdateBlueprintHeaders;
    request: shared.UpdateBlueprintRequest;
}
export declare class UpdateBlueprintResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    illegalBlueprintStateException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateBlueprintResponse?: shared.UpdateBlueprintResponse;
}
