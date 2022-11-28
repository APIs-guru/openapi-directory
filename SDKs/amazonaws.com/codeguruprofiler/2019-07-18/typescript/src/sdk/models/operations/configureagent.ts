import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureAgentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" })
  profilingGroupName: string;
}


export class ConfigureAgentHeaders extends SpeakeasyBase {
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


export class ConfigureAgentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fleetInstanceId" })
  fleetInstanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;
}


export class ConfigureAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureAgentPathParams;

  @SpeakeasyMetadata()
  headers: ConfigureAgentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ConfigureAgentRequestBody;
}


export class ConfigureAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configureAgentResponse?: shared.ConfigureAgentResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
