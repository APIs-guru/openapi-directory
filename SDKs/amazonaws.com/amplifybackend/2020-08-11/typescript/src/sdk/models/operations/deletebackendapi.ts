import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteBackendApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" })
  backendEnvironmentName: string;
}


export class DeleteBackendApiHeaders extends SpeakeasyBase {
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


// DeleteBackendApiRequestBodyResourceConfig
/** 
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export class DeleteBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
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


export class DeleteBackendApiRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceConfig" })
  resourceConfig?: DeleteBackendApiRequestBodyResourceConfig;

  @Metadata({ data: "json, name=resourceName" })
  resourceName: string;
}


export class DeleteBackendApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteBackendApiPathParams;

  @Metadata()
  headers: DeleteBackendApiHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteBackendApiRequestBody;
}


export class DeleteBackendApiResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteBackendApiResponse?: shared.DeleteBackendApiResponse;

  @Metadata()
  gatewayTimeoutException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
