import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBackendApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" })
  backendEnvironmentName: string;
}


export class GetBackendApiHeaders extends SpeakeasyBase {
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


// GetBackendApiRequestBodyResourceConfig
/** 
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export class GetBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalAuthTypes", elemType: shared.BackendApiAuthType })
  additionalAuthTypes?: shared.BackendApiAuthType[];

  @Metadata({ data: "json, name=ApiName" })
  apiName?: string;

  @Metadata({ data: "json, name=ConflictResolution" })
  conflictResolution?: shared.BackendApiConflictResolution;

  @Metadata({ data: "json, name=DefaultAuthType" })
  defaultAuthType?: shared.BackendApiAuthType;

  @Metadata({ data: "json, name=Service" })
  service?: string;

  @Metadata({ data: "json, name=TransformSchema" })
  transformSchema?: string;
}


export class GetBackendApiRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceConfig" })
  resourceConfig?: GetBackendApiRequestBodyResourceConfig;

  @Metadata({ data: "json, name=resourceName" })
  resourceName: string;
}


export class GetBackendApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBackendApiPathParams;

  @Metadata()
  headers: GetBackendApiHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetBackendApiRequestBody;
}


export class GetBackendApiResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  gatewayTimeoutException?: any;

  @Metadata()
  getBackendApiResponse?: shared.GetBackendApiResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
