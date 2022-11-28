import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobUpdate } from "./jobupdate";



export class UpdateJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=JobUpdate" })
  jobUpdate: JobUpdate;
}
