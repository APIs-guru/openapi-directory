import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateResolverPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=typeName" })
  typeName: string;
}


export class CreateResolverHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateResolverRequestBodyCachingConfig
/** 
 * The caching configuration for a resolver that has caching enabled.
**/
export class CreateResolverRequestBodyCachingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cachingKeys" })
  cachingKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}

export enum CreateResolverRequestBodyKindEnum {
    Unit = "UNIT",
    Pipeline = "PIPELINE"
}


// CreateResolverRequestBodyPipelineConfig
/** 
 * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
**/
export class CreateResolverRequestBodyPipelineConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functions" })
  functions?: string[];
}


// CreateResolverRequestBodySyncConfig
/** 
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
export class CreateResolverRequestBodySyncConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conflictDetection" })
  conflictDetection?: shared.ConflictDetectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=conflictHandler" })
  conflictHandler?: shared.ConflictHandlerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=lambdaConflictHandlerConfig" })
  lambdaConflictHandlerConfig?: shared.LambdaConflictHandlerConfig;
}


export class CreateResolverRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cachingConfig" })
  cachingConfig?: CreateResolverRequestBodyCachingConfig;

  @SpeakeasyMetadata({ data: "json, name=dataSourceName" })
  dataSourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: CreateResolverRequestBodyKindEnum;

  @SpeakeasyMetadata({ data: "json, name=pipelineConfig" })
  pipelineConfig?: CreateResolverRequestBodyPipelineConfig;

  @SpeakeasyMetadata({ data: "json, name=requestMappingTemplate" })
  requestMappingTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=responseMappingTemplate" })
  responseMappingTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=syncConfig" })
  syncConfig?: CreateResolverRequestBodySyncConfig;
}


export class CreateResolverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateResolverPathParams;

  @SpeakeasyMetadata()
  headers: CreateResolverHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateResolverRequestBody;
}


export class CreateResolverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createResolverResponse?: shared.CreateResolverResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
