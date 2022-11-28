import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



export class DescribeJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentSource" })
  documentSource?: string;

  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: Job;
}
