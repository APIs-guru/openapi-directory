import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateJobHeaders extends SpeakeasyBase {
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


// CreateJobRequestBodyInput
/** 
 * Information about the file that you're transcoding.
**/
export class CreateJobRequestBodyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @Metadata({ data: "json, name=Container" })
  container?: string;

  @Metadata({ data: "json, name=DetectedProperties" })
  detectedProperties?: shared.DetectedProperties;

  @Metadata({ data: "json, name=Encryption" })
  encryption?: shared.Encryption;

  @Metadata({ data: "json, name=FrameRate" })
  frameRate?: string;

  @Metadata({ data: "json, name=InputCaptions" })
  inputCaptions?: shared.InputCaptions;

  @Metadata({ data: "json, name=Interlaced" })
  interlaced?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Resolution" })
  resolution?: string;

  @Metadata({ data: "json, name=TimeSpan" })
  timeSpan?: shared.TimeSpan;
}


// CreateJobRequestBodyOutput
/** 
 * The <code>CreateJobOutput</code> structure.
**/
export class CreateJobRequestBodyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlbumArt" })
  albumArt?: shared.JobAlbumArt;

  @Metadata({ data: "json, name=Captions" })
  captions?: shared.Captions;

  @Metadata({ data: "json, name=Composition", elemType: shared.Clip })
  composition?: shared.Clip[];

  @Metadata({ data: "json, name=Encryption" })
  encryption?: shared.Encryption;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=PresetId" })
  presetId?: string;

  @Metadata({ data: "json, name=Rotate" })
  rotate?: string;

  @Metadata({ data: "json, name=SegmentDuration" })
  segmentDuration?: string;

  @Metadata({ data: "json, name=ThumbnailEncryption" })
  thumbnailEncryption?: shared.Encryption;

  @Metadata({ data: "json, name=ThumbnailPattern" })
  thumbnailPattern?: string;

  @Metadata({ data: "json, name=Watermarks", elemType: shared.JobWatermark })
  watermarks?: shared.JobWatermark[];
}


export class CreateJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Input" })
  input?: CreateJobRequestBodyInput;

  @Metadata({ data: "json, name=Inputs", elemType: shared.JobInput })
  inputs?: shared.JobInput[];

  @Metadata({ data: "json, name=Output" })
  output?: CreateJobRequestBodyOutput;

  @Metadata({ data: "json, name=OutputKeyPrefix" })
  outputKeyPrefix?: string;

  @Metadata({ data: "json, name=Outputs", elemType: shared.CreateJobOutput })
  outputs?: shared.CreateJobOutput[];

  @Metadata({ data: "json, name=PipelineId" })
  pipelineId: string;

  @Metadata({ data: "json, name=Playlists", elemType: shared.CreateJobPlaylist })
  playlists?: shared.CreateJobPlaylist[];

  @Metadata({ data: "json, name=UserMetadata" })
  userMetadata?: Map<string, string>;
}


export class CreateJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateJobRequestBody;
}


export class CreateJobResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createJobResponse?: shared.CreateJobResponse;

  @Metadata()
  incompatibleVersionException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
