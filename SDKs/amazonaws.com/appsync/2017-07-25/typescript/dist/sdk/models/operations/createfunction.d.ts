import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateFunctionPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class CreateFunctionHeaders extends SpeakeasyBase {
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
export declare class CreateFunctionRequestBodySyncConfig extends SpeakeasyBase {
    conflictDetection?: shared.ConflictDetectionTypeEnum;
    conflictHandler?: shared.ConflictHandlerTypeEnum;
    lambdaConflictHandlerConfig?: shared.LambdaConflictHandlerConfig;
}
export declare class CreateFunctionRequestBody extends SpeakeasyBase {
    dataSourceName: string;
    description?: string;
    functionVersion: string;
    name: string;
    requestMappingTemplate?: string;
    responseMappingTemplate?: string;
    syncConfig?: CreateFunctionRequestBodySyncConfig;
}
export declare class CreateFunctionRequest extends SpeakeasyBase {
    pathParams: CreateFunctionPathParams;
    headers: CreateFunctionHeaders;
    request: CreateFunctionRequestBody;
}
export declare class CreateFunctionResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    createFunctionResponse?: shared.CreateFunctionResponse;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
