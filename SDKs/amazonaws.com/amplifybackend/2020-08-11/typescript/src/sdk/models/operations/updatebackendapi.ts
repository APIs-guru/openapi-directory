import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBackendApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" })
  backendEnvironmentName: string;
}


export class UpdateBackendApiHeaders extends SpeakeasyBase {
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


// UpdateBackendApiRequestBodyResourceConfig
/** 
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export class UpdateBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
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


export class UpdateBackendApiRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceConfig" })
  resourceConfig?: UpdateBackendApiRequestBodyResourceConfig;

  @Metadata({ data: "json, name=resourceName" })
  resourceName: string;
}


export class UpdateBackendApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBackendApiPathParams;

  @Metadata()
  headers: UpdateBackendApiHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateBackendApiRequestBody;
}


export class UpdateBackendApiResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  gatewayTimeoutException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateBackendApiResponse?: shared.UpdateBackendApiResponse;
}
