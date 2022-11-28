import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateManagedEndpointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualClusterId" })
  virtualClusterId: string;
}


export class CreateManagedEndpointHeaders extends SpeakeasyBase {
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


// CreateManagedEndpointRequestBodyConfigurationOverrides
/** 
 * A configuration specification to be used to override existing configurations.
**/
export class CreateManagedEndpointRequestBodyConfigurationOverrides extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationConfiguration", elemType: shared.Configuration })
  applicationConfiguration?: shared.Configuration[];

  @SpeakeasyMetadata({ data: "json, name=monitoringConfiguration" })
  monitoringConfiguration?: shared.MonitoringConfiguration;
}


export class CreateManagedEndpointRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn: string;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=configurationOverrides" })
  configurationOverrides?: CreateManagedEndpointRequestBodyConfigurationOverrides;

  @SpeakeasyMetadata({ data: "json, name=executionRoleArn" })
  executionRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=releaseLabel" })
  releaseLabel: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class CreateManagedEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateManagedEndpointPathParams;

  @SpeakeasyMetadata()
  headers: CreateManagedEndpointHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateManagedEndpointRequestBody;
}


export class CreateManagedEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createManagedEndpointResponse?: shared.CreateManagedEndpointResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
