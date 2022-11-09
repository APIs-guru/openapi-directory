import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateManagedEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=virtualClusterId" })
  virtualClusterId: string;
}


export class CreateManagedEndpointHeaders extends SpeakeasyBase {
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


// CreateManagedEndpointRequestBodyConfigurationOverrides
/** 
 * A configuration specification to be used to override existing configurations.
**/
export class CreateManagedEndpointRequestBodyConfigurationOverrides extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationConfiguration", elemType: shared.Configuration })
  applicationConfiguration?: shared.Configuration[];

  @Metadata({ data: "json, name=monitoringConfiguration" })
  monitoringConfiguration?: shared.MonitoringConfiguration;
}


export class CreateManagedEndpointRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn: string;

  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=configurationOverrides" })
  configurationOverrides?: CreateManagedEndpointRequestBodyConfigurationOverrides;

  @Metadata({ data: "json, name=executionRoleArn" })
  executionRoleArn: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=releaseLabel" })
  releaseLabel: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class CreateManagedEndpointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateManagedEndpointPathParams;

  @Metadata()
  headers: CreateManagedEndpointHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateManagedEndpointRequestBody;
}


export class CreateManagedEndpointResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createManagedEndpointResponse?: shared.CreateManagedEndpointResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
