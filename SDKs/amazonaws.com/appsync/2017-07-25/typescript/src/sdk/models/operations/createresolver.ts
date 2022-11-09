import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateResolverPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=typeName" })
  typeName: string;
}


export class CreateResolverHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateResolverRequestBodyCachingConfig
/** 
 * The caching configuration for a resolver that has caching enabled.
**/
export class CreateResolverRequestBodyCachingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cachingKeys" })
  cachingKeys?: string[];

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;
}

export enum CreateResolverRequestBodyKindEnum {
    Unit = "UNIT"
,    Pipeline = "PIPELINE"
}


// CreateResolverRequestBodyPipelineConfig
/** 
 * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
**/
export class CreateResolverRequestBodyPipelineConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=functions" })
  functions?: string[];
}


// CreateResolverRequestBodySyncConfig
/** 
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
export class CreateResolverRequestBodySyncConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=conflictDetection" })
  conflictDetection?: shared.ConflictDetectionTypeEnum;

  @Metadata({ data: "json, name=conflictHandler" })
  conflictHandler?: shared.ConflictHandlerTypeEnum;

  @Metadata({ data: "json, name=lambdaConflictHandlerConfig" })
  lambdaConflictHandlerConfig?: shared.LambdaConflictHandlerConfig;
}


export class CreateResolverRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=cachingConfig" })
  cachingConfig?: CreateResolverRequestBodyCachingConfig;

  @Metadata({ data: "json, name=dataSourceName" })
  dataSourceName?: string;

  @Metadata({ data: "json, name=fieldName" })
  fieldName: string;

  @Metadata({ data: "json, name=kind" })
  kind?: CreateResolverRequestBodyKindEnum;

  @Metadata({ data: "json, name=pipelineConfig" })
  pipelineConfig?: CreateResolverRequestBodyPipelineConfig;

  @Metadata({ data: "json, name=requestMappingTemplate" })
  requestMappingTemplate?: string;

  @Metadata({ data: "json, name=responseMappingTemplate" })
  responseMappingTemplate?: string;

  @Metadata({ data: "json, name=syncConfig" })
  syncConfig?: CreateResolverRequestBodySyncConfig;
}


export class CreateResolverRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateResolverPathParams;

  @Metadata()
  headers: CreateResolverHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateResolverRequestBody;
}


export class CreateResolverResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createResolverResponse?: shared.CreateResolverResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
