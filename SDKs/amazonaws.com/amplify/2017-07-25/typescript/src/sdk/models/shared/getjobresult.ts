import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";


export class GetJobResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=job" })
  job: Job;
}
