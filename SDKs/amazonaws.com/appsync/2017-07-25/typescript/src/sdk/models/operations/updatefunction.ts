import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFunctionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;
}


export class UpdateFunctionHeaders extends SpeakeasyBase {
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


// UpdateFunctionRequestBodySyncConfig
/** 
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
export class UpdateFunctionRequestBodySyncConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=conflictDetection" })
  conflictDetection?: shared.ConflictDetectionTypeEnum;

  @Metadata({ data: "json, name=conflictHandler" })
  conflictHandler?: shared.ConflictHandlerTypeEnum;

  @Metadata({ data: "json, name=lambdaConflictHandlerConfig" })
  lambdaConflictHandlerConfig?: shared.LambdaConflictHandlerConfig;
}


export class UpdateFunctionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceName" })
  dataSourceName: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=functionVersion" })
  functionVersion: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=requestMappingTemplate" })
  requestMappingTemplate?: string;

  @Metadata({ data: "json, name=responseMappingTemplate" })
  responseMappingTemplate?: string;

  @Metadata({ data: "json, name=syncConfig" })
  syncConfig?: UpdateFunctionRequestBodySyncConfig;
}


export class UpdateFunctionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateFunctionPathParams;

  @Metadata()
  headers: UpdateFunctionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateFunctionRequestBody;
}


export class UpdateFunctionResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  updateFunctionResponse?: shared.UpdateFunctionResponse;
}
