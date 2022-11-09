import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePresetHeaders extends SpeakeasyBase {
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


// CreatePresetRequestBodyAudio
/** 
 * Parameters required for transcoding audio.
**/
export class CreatePresetRequestBodyAudio extends SpeakeasyBase {
  @Metadata({ data: "json, name=AudioPackingMode" })
  audioPackingMode?: string;

  @Metadata({ data: "json, name=BitRate" })
  bitRate?: string;

  @Metadata({ data: "json, name=Channels" })
  channels?: string;

  @Metadata({ data: "json, name=Codec" })
  codec?: string;

  @Metadata({ data: "json, name=CodecOptions" })
  codecOptions?: shared.AudioCodecOptions;

  @Metadata({ data: "json, name=SampleRate" })
  sampleRate?: string;
}


// CreatePresetRequestBodyThumbnails
/** 
 * Thumbnails for videos.
**/
export class CreatePresetRequestBodyThumbnails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @Metadata({ data: "json, name=Format" })
  format?: string;

  @Metadata({ data: "json, name=Interval" })
  interval?: string;

  @Metadata({ data: "json, name=MaxHeight" })
  maxHeight?: string;

  @Metadata({ data: "json, name=MaxWidth" })
  maxWidth?: string;

  @Metadata({ data: "json, name=PaddingPolicy" })
  paddingPolicy?: string;

  @Metadata({ data: "json, name=Resolution" })
  resolution?: string;

  @Metadata({ data: "json, name=SizingPolicy" })
  sizingPolicy?: string;
}


// CreatePresetRequestBodyVideo
/** 
 * The <code>VideoParameters</code> structure.
**/
export class CreatePresetRequestBodyVideo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @Metadata({ data: "json, name=BitRate" })
  bitRate?: string;

  @Metadata({ data: "json, name=Codec" })
  codec?: string;

  @Metadata({ data: "json, name=CodecOptions" })
  codecOptions?: Map<string, string>;

  @Metadata({ data: "json, name=DisplayAspectRatio" })
  displayAspectRatio?: string;

  @Metadata({ data: "json, name=FixedGOP" })
  fixedGop?: string;

  @Metadata({ data: "json, name=FrameRate" })
  frameRate?: string;

  @Metadata({ data: "json, name=KeyframesMaxDist" })
  keyframesMaxDist?: string;

  @Metadata({ data: "json, name=MaxFrameRate" })
  maxFrameRate?: string;

  @Metadata({ data: "json, name=MaxHeight" })
  maxHeight?: string;

  @Metadata({ data: "json, name=MaxWidth" })
  maxWidth?: string;

  @Metadata({ data: "json, name=PaddingPolicy" })
  paddingPolicy?: string;

  @Metadata({ data: "json, name=Resolution" })
  resolution?: string;

  @Metadata({ data: "json, name=SizingPolicy" })
  sizingPolicy?: string;

  @Metadata({ data: "json, name=Watermarks", elemType: shared.PresetWatermark })
  watermarks?: shared.PresetWatermark[];
}


export class CreatePresetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Audio" })
  audio?: CreatePresetRequestBodyAudio;

  @Metadata({ data: "json, name=Container" })
  container: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Thumbnails" })
  thumbnails?: CreatePresetRequestBodyThumbnails;

  @Metadata({ data: "json, name=Video" })
  video?: CreatePresetRequestBodyVideo;
}


export class CreatePresetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePresetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreatePresetRequestBody;
}


export class CreatePresetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createPresetResponse?: shared.CreatePresetResponse;

  @Metadata()
  incompatibleVersionException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
