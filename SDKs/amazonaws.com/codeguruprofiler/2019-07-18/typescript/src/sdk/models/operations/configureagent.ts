import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigureAgentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" })
  profilingGroupName: string;
}


export class ConfigureAgentHeaders extends SpeakeasyBase {
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


export class ConfigureAgentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=fleetInstanceId" })
  fleetInstanceId?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;
}


export class ConfigureAgentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfigureAgentPathParams;

  @Metadata()
  headers: ConfigureAgentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ConfigureAgentRequestBody;
}


export class ConfigureAgentResponse extends SpeakeasyBase {
  @Metadata()
  configureAgentResponse?: shared.ConfigureAgentResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
