import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobInput } from "./jobinput";
import { JobInput } from "./jobinput";
import { JobOutput } from "./joboutput";
import { JobOutput } from "./joboutput";
import { Playlist } from "./playlist";
import { Timing } from "./timing";


// Job
/** 
 * A section of the response body that provides information about the job that is created.
**/
export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Input" })
  input?: JobInput;

  @Metadata({ data: "json, name=Inputs", elemType: shared.JobInput })
  inputs?: JobInput[];

  @Metadata({ data: "json, name=Output" })
  output?: JobOutput;

  @Metadata({ data: "json, name=OutputKeyPrefix" })
  outputKeyPrefix?: string;

  @Metadata({ data: "json, name=Outputs", elemType: shared.JobOutput })
  outputs?: JobOutput[];

  @Metadata({ data: "json, name=PipelineId" })
  pipelineId?: string;

  @Metadata({ data: "json, name=Playlists", elemType: shared.Playlist })
  playlists?: Playlist[];

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=Timing" })
  timing?: Timing;

  @Metadata({ data: "json, name=UserMetadata" })
  userMetadata?: Map<string, string>;
}
