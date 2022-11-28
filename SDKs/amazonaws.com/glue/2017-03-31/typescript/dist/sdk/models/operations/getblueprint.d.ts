import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBlueprintXAmzTargetEnum {
    AwsGlueGetBlueprint = "AWSGlue.GetBlueprint"
}
export declare class GetBlueprintHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBlueprintXAmzTargetEnum;
}
export declare class GetBlueprintRequest extends SpeakeasyBase {
    headers: GetBlueprintHeaders;
    request: shared.GetBlueprintRequest;
}
export declare class GetBlueprintResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getBlueprintResponse?: shared.GetBlueprintResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
