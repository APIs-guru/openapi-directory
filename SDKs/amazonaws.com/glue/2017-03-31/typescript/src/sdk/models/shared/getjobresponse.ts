import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";


export class GetJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Job" })
  job?: Job;
}
