import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateJobHeaders extends SpeakeasyBase {
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


// CreateJobRequestBodyInput
/** 
 * Information about the file that you're transcoding.
**/
export class CreateJobRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=DetectedProperties" })
  detectedProperties?: shared.DetectedProperties;

  @SpeakeasyMetadata({ data: "json, name=Encryption" })
  encryption?: shared.Encryption;

  @SpeakeasyMetadata({ data: "json, name=FrameRate" })
  frameRate?: string;

  @SpeakeasyMetadata({ data: "json, name=InputCaptions" })
  inputCaptions?: shared.InputCaptions;

  @SpeakeasyMetadata({ data: "json, name=Interlaced" })
  interlaced?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Resolution" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeSpan" })
  timeSpan?: shared.TimeSpan;
}


// CreateJobRequestBodyOutput
/** 
 * The <code>CreateJobOutput</code> structure.
**/
export class CreateJobRequestBodyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlbumArt" })
  albumArt?: shared.JobAlbumArt;

  @SpeakeasyMetadata({ data: "json, name=Captions" })
  captions?: shared.Captions;

  @SpeakeasyMetadata({ data: "json, name=Composition", elemType: shared.Clip })
  composition?: shared.Clip[];

  @SpeakeasyMetadata({ data: "json, name=Encryption" })
  encryption?: shared.Encryption;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=PresetId" })
  presetId?: string;

  @SpeakeasyMetadata({ data: "json, name=Rotate" })
  rotate?: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentDuration" })
  segmentDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=ThumbnailEncryption" })
  thumbnailEncryption?: shared.Encryption;

  @SpeakeasyMetadata({ data: "json, name=ThumbnailPattern" })
  thumbnailPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=Watermarks", elemType: shared.JobWatermark })
  watermarks?: shared.JobWatermark[];
}


export class CreateJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Input" })
  input?: CreateJobRequestBodyInput;

  @SpeakeasyMetadata({ data: "json, name=Inputs", elemType: shared.JobInput })
  inputs?: shared.JobInput[];

  @SpeakeasyMetadata({ data: "json, name=Output" })
  output?: CreateJobRequestBodyOutput;

  @SpeakeasyMetadata({ data: "json, name=OutputKeyPrefix" })
  outputKeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=Outputs", elemType: shared.CreateJobOutput })
  outputs?: shared.CreateJobOutput[];

  @SpeakeasyMetadata({ data: "json, name=PipelineId" })
  pipelineId: string;

  @SpeakeasyMetadata({ data: "json, name=Playlists", elemType: shared.CreateJobPlaylist })
  playlists?: shared.CreateJobPlaylist[];

  @SpeakeasyMetadata({ data: "json, name=UserMetadata" })
  userMetadata?: Map<string, string>;
}


export class CreateJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateJobRequestBody;
}


export class CreateJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createJobResponse?: shared.CreateJobResponse;

  @SpeakeasyMetadata()
  incompatibleVersionException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
