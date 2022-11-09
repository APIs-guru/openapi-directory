import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RunPipelineActivityHeaders extends SpeakeasyBase {
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


// RunPipelineActivityRequestBodyPipelineActivity
/** 
 * An activity that performs a transformation on a message.
**/
export class RunPipelineActivityRequestBodyPipelineActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=addAttributes" })
  addAttributes?: shared.AddAttributesActivity;

  @Metadata({ data: "json, name=channel" })
  channel?: shared.ChannelActivity;

  @Metadata({ data: "json, name=datastore" })
  datastore?: shared.DatastoreActivity;

  @Metadata({ data: "json, name=deviceRegistryEnrich" })
  deviceRegistryEnrich?: shared.DeviceRegistryEnrichActivity;

  @Metadata({ data: "json, name=deviceShadowEnrich" })
  deviceShadowEnrich?: shared.DeviceShadowEnrichActivity;

  @Metadata({ data: "json, name=filter" })
  filter?: shared.FilterActivity;

  @Metadata({ data: "json, name=lambda" })
  lambda?: shared.LambdaActivity;

  @Metadata({ data: "json, name=math" })
  math?: shared.MathActivity;

  @Metadata({ data: "json, name=removeAttributes" })
  removeAttributes?: shared.RemoveAttributesActivity;

  @Metadata({ data: "json, name=selectAttributes" })
  selectAttributes?: shared.SelectAttributesActivity;
}


export class RunPipelineActivityRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=payloads" })
  payloads: string[];

  @Metadata({ data: "json, name=pipelineActivity" })
  pipelineActivity: RunPipelineActivityRequestBodyPipelineActivity;
}


export class RunPipelineActivityRequest extends SpeakeasyBase {
  @Metadata()
  headers: RunPipelineActivityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RunPipelineActivityRequestBody;
}


export class RunPipelineActivityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  runPipelineActivityResponse?: shared.RunPipelineActivityResponse;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
