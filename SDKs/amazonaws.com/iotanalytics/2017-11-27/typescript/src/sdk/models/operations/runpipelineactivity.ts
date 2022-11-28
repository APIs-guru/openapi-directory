import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RunPipelineActivityHeaders extends SpeakeasyBase {
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


// RunPipelineActivityRequestBodyPipelineActivity
/** 
 * An activity that performs a transformation on a message.
**/
export class RunPipelineActivityRequestBodyPipelineActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addAttributes" })
  addAttributes?: shared.AddAttributesActivity;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: shared.ChannelActivity;

  @SpeakeasyMetadata({ data: "json, name=datastore" })
  datastore?: shared.DatastoreActivity;

  @SpeakeasyMetadata({ data: "json, name=deviceRegistryEnrich" })
  deviceRegistryEnrich?: shared.DeviceRegistryEnrichActivity;

  @SpeakeasyMetadata({ data: "json, name=deviceShadowEnrich" })
  deviceShadowEnrich?: shared.DeviceShadowEnrichActivity;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: shared.FilterActivity;

  @SpeakeasyMetadata({ data: "json, name=lambda" })
  lambda?: shared.LambdaActivity;

  @SpeakeasyMetadata({ data: "json, name=math" })
  math?: shared.MathActivity;

  @SpeakeasyMetadata({ data: "json, name=removeAttributes" })
  removeAttributes?: shared.RemoveAttributesActivity;

  @SpeakeasyMetadata({ data: "json, name=selectAttributes" })
  selectAttributes?: shared.SelectAttributesActivity;
}


export class RunPipelineActivityRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payloads" })
  payloads: string[];

  @SpeakeasyMetadata({ data: "json, name=pipelineActivity" })
  pipelineActivity: RunPipelineActivityRequestBodyPipelineActivity;
}


export class RunPipelineActivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RunPipelineActivityHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RunPipelineActivityRequestBody;
}


export class RunPipelineActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  runPipelineActivityResponse?: shared.RunPipelineActivityResponse;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
