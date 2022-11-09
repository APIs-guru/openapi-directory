import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeToLiveDescription } from "./timetolivedescription";


export class DescribeTimeToLiveOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TimeToLiveDescription" })
  timeToLiveDescription?: TimeToLiveDescription;
}
