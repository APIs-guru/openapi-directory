import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePresetHeaders extends SpeakeasyBase {
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


// CreatePresetRequestBodyAudio
/** 
 * Parameters required for transcoding audio.
**/
export class CreatePresetRequestBodyAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AudioPackingMode" })
  audioPackingMode?: string;

  @SpeakeasyMetadata({ data: "json, name=BitRate" })
  bitRate?: string;

  @SpeakeasyMetadata({ data: "json, name=Channels" })
  channels?: string;

  @SpeakeasyMetadata({ data: "json, name=Codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=CodecOptions" })
  codecOptions?: shared.AudioCodecOptions;

  @SpeakeasyMetadata({ data: "json, name=SampleRate" })
  sampleRate?: string;
}


// CreatePresetRequestBodyThumbnails
/** 
 * Thumbnails for videos.
**/
export class CreatePresetRequestBodyThumbnails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=Interval" })
  interval?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxHeight" })
  maxHeight?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxWidth" })
  maxWidth?: string;

  @SpeakeasyMetadata({ data: "json, name=PaddingPolicy" })
  paddingPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=Resolution" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "json, name=SizingPolicy" })
  sizingPolicy?: string;
}


// CreatePresetRequestBodyVideo
/** 
 * The <code>VideoParameters</code> structure.
**/
export class CreatePresetRequestBodyVideo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=BitRate" })
  bitRate?: string;

  @SpeakeasyMetadata({ data: "json, name=Codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=CodecOptions" })
  codecOptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=DisplayAspectRatio" })
  displayAspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=FixedGOP" })
  fixedGop?: string;

  @SpeakeasyMetadata({ data: "json, name=FrameRate" })
  frameRate?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyframesMaxDist" })
  keyframesMaxDist?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxFrameRate" })
  maxFrameRate?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxHeight" })
  maxHeight?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxWidth" })
  maxWidth?: string;

  @SpeakeasyMetadata({ data: "json, name=PaddingPolicy" })
  paddingPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=Resolution" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "json, name=SizingPolicy" })
  sizingPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=Watermarks", elemType: shared.PresetWatermark })
  watermarks?: shared.PresetWatermark[];
}


export class CreatePresetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Audio" })
  audio?: CreatePresetRequestBodyAudio;

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Thumbnails" })
  thumbnails?: CreatePresetRequestBodyThumbnails;

  @SpeakeasyMetadata({ data: "json, name=Video" })
  video?: CreatePresetRequestBodyVideo;
}


export class CreatePresetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePresetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreatePresetRequestBody;
}


export class CreatePresetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createPresetResponse?: shared.CreatePresetResponse;

  @SpeakeasyMetadata()
  incompatibleVersionException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
