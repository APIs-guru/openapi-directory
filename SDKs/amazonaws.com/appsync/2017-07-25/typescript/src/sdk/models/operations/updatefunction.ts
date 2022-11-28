import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateFunctionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;
}


export class UpdateFunctionHeaders extends SpeakeasyBase {
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


// UpdateFunctionRequestBodySyncConfig
/** 
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
export class UpdateFunctionRequestBodySyncConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conflictDetection" })
  conflictDetection?: shared.ConflictDetectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=conflictHandler" })
  conflictHandler?: shared.ConflictHandlerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=lambdaConflictHandlerConfig" })
  lambdaConflictHandlerConfig?: shared.LambdaConflictHandlerConfig;
}


export class UpdateFunctionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceName" })
  dataSourceName: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=functionVersion" })
  functionVersion: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=requestMappingTemplate" })
  requestMappingTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=responseMappingTemplate" })
  responseMappingTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=syncConfig" })
  syncConfig?: UpdateFunctionRequestBodySyncConfig;
}


export class UpdateFunctionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateFunctionPathParams;

  @SpeakeasyMetadata()
  headers: UpdateFunctionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateFunctionRequestBody;
}


export class UpdateFunctionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateFunctionResponse?: shared.UpdateFunctionResponse;
}
