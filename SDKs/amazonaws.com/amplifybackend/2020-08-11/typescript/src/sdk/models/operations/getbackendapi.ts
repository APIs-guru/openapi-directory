import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBackendApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" })
  backendEnvironmentName: string;
}


export class GetBackendApiHeaders extends SpeakeasyBase {
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


// GetBackendApiRequestBodyResourceConfig
/** 
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export class GetBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalAuthTypes", elemType: shared.BackendApiAuthType })
  additionalAuthTypes?: shared.BackendApiAuthType[];

  @SpeakeasyMetadata({ data: "json, name=ApiName" })
  apiName?: string;

  @SpeakeasyMetadata({ data: "json, name=ConflictResolution" })
  conflictResolution?: shared.BackendApiConflictResolution;

  @SpeakeasyMetadata({ data: "json, name=DefaultAuthType" })
  defaultAuthType?: shared.BackendApiAuthType;

  @SpeakeasyMetadata({ data: "json, name=Service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=TransformSchema" })
  transformSchema?: string;
}


export class GetBackendApiRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceConfig" })
  resourceConfig?: GetBackendApiRequestBodyResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;
}


export class GetBackendApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBackendApiPathParams;

  @SpeakeasyMetadata()
  headers: GetBackendApiHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetBackendApiRequestBody;
}


export class GetBackendApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  gatewayTimeoutException?: any;

  @SpeakeasyMetadata()
  getBackendApiResponse?: shared.GetBackendApiResponse;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
