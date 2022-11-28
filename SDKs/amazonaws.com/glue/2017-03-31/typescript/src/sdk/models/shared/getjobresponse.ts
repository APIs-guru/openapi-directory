import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



export class GetJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Job" })
  job?: Job;
}
