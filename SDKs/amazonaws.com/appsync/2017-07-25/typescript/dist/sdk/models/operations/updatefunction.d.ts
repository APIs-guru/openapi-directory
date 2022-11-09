import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateFunctionPathParams extends SpeakeasyBase {
    apiId: string;
    functionId: string;
}
export declare class UpdateFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
export declare class UpdateFunctionRequestBodySyncConfig extends SpeakeasyBase {
    conflictDetection?: shared.ConflictDetectionTypeEnum;
    conflictHandler?: shared.ConflictHandlerTypeEnum;
    lambdaConflictHandlerConfig?: shared.LambdaConflictHandlerConfig;
}
export declare class UpdateFunctionRequestBody extends SpeakeasyBase {
    dataSourceName: string;
    description?: string;
    functionVersion: string;
    name: string;
    requestMappingTemplate?: string;
    responseMappingTemplate?: string;
    syncConfig?: UpdateFunctionRequestBodySyncConfig;
}
export declare class UpdateFunctionRequest extends SpeakeasyBase {
    pathParams: UpdateFunctionPathParams;
    headers: UpdateFunctionHeaders;
    request: UpdateFunctionRequestBody;
}
export declare class UpdateFunctionResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateFunctionResponse?: shared.UpdateFunctionResponse;
}
