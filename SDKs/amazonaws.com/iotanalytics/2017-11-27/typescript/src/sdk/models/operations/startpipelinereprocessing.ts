import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartPipelineReprocessingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pipelineName" })
  pipelineName: string;
}


export class StartPipelineReprocessingHeaders extends SpeakeasyBase {
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


// StartPipelineReprocessingRequestBodyChannelMessages
/** 
 * Specifies one or more sets of channel messages.
**/
export class StartPipelineReprocessingRequestBodyChannelMessages extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Paths" })
  s3Paths?: string[];
}


export class StartPipelineReprocessingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelMessages" })
  channelMessages?: StartPipelineReprocessingRequestBodyChannelMessages;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;
}


export class StartPipelineReprocessingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartPipelineReprocessingPathParams;

  @Metadata()
  headers: StartPipelineReprocessingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartPipelineReprocessingRequestBody;
}


export class StartPipelineReprocessingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  startPipelineReprocessingResponse?: shared.StartPipelineReprocessingResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
