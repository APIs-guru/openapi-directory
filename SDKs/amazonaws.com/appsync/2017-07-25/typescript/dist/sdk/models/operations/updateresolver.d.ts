import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateResolverPathParams extends SpeakeasyBase {
    apiId: string;
    fieldName: string;
    typeName: string;
}
export declare class UpdateResolverHeaders extends SpeakeasyBase {
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
export declare class UpdateResolverRequestBodyCachingConfig extends SpeakeasyBase {
    cachingKeys?: string[];
    ttl?: number;
}
export declare enum UpdateResolverRequestBodyKindEnum {
    Unit = "UNIT",
    Pipeline = "PIPELINE"
}
/**
 * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
**/
export declare class UpdateResolverRequestBodyPipelineConfig extends SpeakeasyBase {
    functions?: string[];
}
/**
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
export declare class UpdateResolverRequestBodySyncConfig extends SpeakeasyBase {
    conflictDetection?: shared.ConflictDetectionTypeEnum;
    conflictHandler?: shared.ConflictHandlerTypeEnum;
    lambdaConflictHandlerConfig?: shared.LambdaConflictHandlerConfig;
}
export declare class UpdateResolverRequestBody extends SpeakeasyBase {
    cachingConfig?: UpdateResolverRequestBodyCachingConfig;
    dataSourceName?: string;
    kind?: UpdateResolverRequestBodyKindEnum;
    pipelineConfig?: UpdateResolverRequestBodyPipelineConfig;
    requestMappingTemplate?: string;
    responseMappingTemplate?: string;
    syncConfig?: UpdateResolverRequestBodySyncConfig;
}
export declare class UpdateResolverRequest extends SpeakeasyBase {
    pathParams: UpdateResolverPathParams;
    headers: UpdateResolverHeaders;
    request: UpdateResolverRequestBody;
}
export declare class UpdateResolverResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateResolverResponse?: shared.UpdateResolverResponse;
}
