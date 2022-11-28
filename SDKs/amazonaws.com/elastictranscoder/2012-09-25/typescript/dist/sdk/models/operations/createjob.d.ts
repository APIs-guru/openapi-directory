import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Information about the file that you're transcoding.
**/
export declare class CreateJobRequestBodyInput extends SpeakeasyBase {
    aspectRatio?: string;
    container?: string;
    detectedProperties?: shared.DetectedProperties;
    encryption?: shared.Encryption;
    frameRate?: string;
    inputCaptions?: shared.InputCaptions;
    interlaced?: string;
    key?: string;
    resolution?: string;
    timeSpan?: shared.TimeSpan;
}
/**
 * The <code>CreateJobOutput</code> structure.
**/
export declare class CreateJobRequestBodyOutput extends SpeakeasyBase {
    albumArt?: shared.JobAlbumArt;
    captions?: shared.Captions;
    composition?: shared.Clip[];
    encryption?: shared.Encryption;
    key?: string;
    presetId?: string;
    rotate?: string;
    segmentDuration?: string;
    thumbnailEncryption?: shared.Encryption;
    thumbnailPattern?: string;
    watermarks?: shared.JobWatermark[];
}
export declare class CreateJobRequestBody extends SpeakeasyBase {
    input?: CreateJobRequestBodyInput;
    inputs?: shared.JobInput[];
    output?: CreateJobRequestBodyOutput;
    outputKeyPrefix?: string;
    outputs?: shared.CreateJobOutput[];
    pipelineId: string;
    playlists?: shared.CreateJobPlaylist[];
    userMetadata?: Map<string, string>;
}
export declare class CreateJobRequest extends SpeakeasyBase {
    headers: CreateJobHeaders;
    request: CreateJobRequestBody;
}
export declare class CreateJobResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createJobResponse?: shared.CreateJobResponse;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
