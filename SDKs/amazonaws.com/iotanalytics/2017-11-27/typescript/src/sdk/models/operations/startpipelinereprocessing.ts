import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartPipelineReprocessingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pipelineName" })
  pipelineName: string;
}


export class StartPipelineReprocessingHeaders extends SpeakeasyBase {
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


// StartPipelineReprocessingRequestBodyChannelMessages
/** 
 * Specifies one or more sets of channel messages.
**/
export class StartPipelineReprocessingRequestBodyChannelMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Paths" })
  s3Paths?: string[];
}


export class StartPipelineReprocessingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelMessages" })
  channelMessages?: StartPipelineReprocessingRequestBodyChannelMessages;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;
}


export class StartPipelineReprocessingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StartPipelineReprocessingPathParams;

  @SpeakeasyMetadata()
  headers: StartPipelineReprocessingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartPipelineReprocessingRequestBody;
}


export class StartPipelineReprocessingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  startPipelineReprocessingResponse?: shared.StartPipelineReprocessingResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
