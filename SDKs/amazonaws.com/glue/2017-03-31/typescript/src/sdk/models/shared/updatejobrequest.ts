import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobUpdate } from "./jobupdate";


export class UpdateJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName: string;

  @Metadata({ data: "json, name=JobUpdate" })
  jobUpdate: JobUpdate;
}
