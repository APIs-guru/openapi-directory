import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobInput } from "./jobinput";
import { JobOutput } from "./joboutput";
import { Playlist } from "./playlist";
import { Timing } from "./timing";



// Job
/** 
 * A section of the response body that provides information about the job that is created.
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Input" })
  input?: JobInput;

  @SpeakeasyMetadata({ data: "json, name=Inputs", elemType: JobInput })
  inputs?: JobInput[];

  @SpeakeasyMetadata({ data: "json, name=Output" })
  output?: JobOutput;

  @SpeakeasyMetadata({ data: "json, name=OutputKeyPrefix" })
  outputKeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=Outputs", elemType: JobOutput })
  outputs?: JobOutput[];

  @SpeakeasyMetadata({ data: "json, name=PipelineId" })
  pipelineId?: string;

  @SpeakeasyMetadata({ data: "json, name=Playlists", elemType: Playlist })
  playlists?: Playlist[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=Timing" })
  timing?: Timing;

  @SpeakeasyMetadata({ data: "json, name=UserMetadata" })
  userMetadata?: Map<string, string>;
}
