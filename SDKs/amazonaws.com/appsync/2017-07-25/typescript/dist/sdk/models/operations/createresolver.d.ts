import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateResolverPathParams extends SpeakeasyBase {
    apiId: string;
    typeName: string;
}
export declare class CreateResolverHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The caching configuration for a resolver that has caching enabled.
**/
export declare class CreateResolverRequestBodyCachingConfig extends SpeakeasyBase {
    cachingKeys?: string[];
    ttl?: number;
}
export declare enum CreateResolverRequestBodyKindEnum {
    Unit = "UNIT",
    Pipeline = "PIPELINE"
}
/**
 * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
**/
export declare class CreateResolverRequestBodyPipelineConfig extends SpeakeasyBase {
    functions?: string[];
}
/**
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
export declare class CreateResolverRequestBodySyncConfig extends SpeakeasyBase {
    conflictDetection?: shared.ConflictDetectionTypeEnum;
    conflictHandler?: shared.ConflictHandlerTypeEnum;
    lambdaConflictHandlerConfig?: shared.LambdaConflictHandlerConfig;
}
export declare class CreateResolverRequestBody extends SpeakeasyBase {
    cachingConfig?: CreateResolverRequestBodyCachingConfig;
    dataSourceName?: string;
    fieldName: string;
    kind?: CreateResolverRequestBodyKindEnum;
    pipelineConfig?: CreateResolverRequestBodyPipelineConfig;
    requestMappingTemplate?: string;
    responseMappingTemplate?: string;
    syncConfig?: CreateResolverRequestBodySyncConfig;
}
export declare class CreateResolverRequest extends SpeakeasyBase {
    pathParams: CreateResolverPathParams;
    headers: CreateResolverHeaders;
    request: CreateResolverRequestBody;
}
export declare class CreateResolverResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    createResolverResponse?: shared.CreateResolverResponse;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
