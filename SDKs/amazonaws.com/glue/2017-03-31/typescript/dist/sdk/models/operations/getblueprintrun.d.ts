import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetBlueprintRunXAmzTargetEnum {
    AwsGlueGetBlueprintRun = "AWSGlue.GetBlueprintRun"
}
export declare class GetBlueprintRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBlueprintRunXAmzTargetEnum;
}
export declare class GetBlueprintRunRequest extends SpeakeasyBase {
    headers: GetBlueprintRunHeaders;
    request: shared.GetBlueprintRunRequest;
}
export declare class GetBlueprintRunResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getBlueprintRunResponse?: shared.GetBlueprintRunResponse;
    internalServiceException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
