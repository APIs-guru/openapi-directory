import { SpeakeasyBase } from "../../../internal/utils";
import { JobInput } from "./jobinput";
import { JobOutput } from "./joboutput";
import { Playlist } from "./playlist";
import { Timing } from "./timing";
/**
 * A section of the response body that provides information about the job that is created.
**/
export declare class Job extends SpeakeasyBase {
    arn?: string;
    id?: string;
    input?: JobInput;
    inputs?: JobInput[];
    output?: JobOutput;
    outputKeyPrefix?: string;
    outputs?: JobOutput[];
    pipelineId?: string;
    playlists?: Playlist[];
    status?: string;
    timing?: Timing;
    userMetadata?: Map<string, string>;
}
