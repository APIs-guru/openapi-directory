import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";


export class DescribeJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentSource" })
  documentSource?: string;

  @Metadata({ data: "json, name=job" })
  job?: Job;
}
