import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePresetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Parameters required for transcoding audio.
**/
export declare class CreatePresetRequestBodyAudio extends SpeakeasyBase {
    audioPackingMode?: string;
    bitRate?: string;
    channels?: string;
    codec?: string;
    codecOptions?: shared.AudioCodecOptions;
    sampleRate?: string;
}
/**
 * Thumbnails for videos.
**/
export declare class CreatePresetRequestBodyThumbnails extends SpeakeasyBase {
    aspectRatio?: string;
    format?: string;
    interval?: string;
    maxHeight?: string;
    maxWidth?: string;
    paddingPolicy?: string;
    resolution?: string;
    sizingPolicy?: string;
}
/**
 * The <code>VideoParameters</code> structure.
**/
export declare class CreatePresetRequestBodyVideo extends SpeakeasyBase {
    aspectRatio?: string;
    bitRate?: string;
    codec?: string;
    codecOptions?: Map<string, string>;
    displayAspectRatio?: string;
    fixedGop?: string;
    frameRate?: string;
    keyframesMaxDist?: string;
    maxFrameRate?: string;
    maxHeight?: string;
    maxWidth?: string;
    paddingPolicy?: string;
    resolution?: string;
    sizingPolicy?: string;
    watermarks?: shared.PresetWatermark[];
}
export declare class CreatePresetRequestBody extends SpeakeasyBase {
    audio?: CreatePresetRequestBodyAudio;
    container: string;
    description?: string;
    name: string;
    thumbnails?: CreatePresetRequestBodyThumbnails;
    video?: CreatePresetRequestBodyVideo;
}
export declare class CreatePresetRequest extends SpeakeasyBase {
    headers: CreatePresetHeaders;
    request: CreatePresetRequestBody;
}
export declare class CreatePresetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createPresetResponse?: shared.CreatePresetResponse;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    limitExceededException?: any;
    statusCode: number;
    validationException?: any;
}
