import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBlueprintXAmzTargetEnum {
    AwsGlueDeleteBlueprint = "AWSGlue.DeleteBlueprint"
}
export declare class DeleteBlueprintHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBlueprintXAmzTargetEnum;
}
export declare class DeleteBlueprintRequest extends SpeakeasyBase {
    headers: DeleteBlueprintHeaders;
    request: shared.DeleteBlueprintRequest;
}
export declare class DeleteBlueprintResponse extends SpeakeasyBase {
    contentType: string;
    deleteBlueprintResponse?: shared.DeleteBlueprintResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
