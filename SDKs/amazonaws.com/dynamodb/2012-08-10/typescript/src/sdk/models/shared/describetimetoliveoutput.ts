import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeToLiveDescription } from "./timetolivedescription";



export class DescribeTimeToLiveOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TimeToLiveDescription" })
  timeToLiveDescription?: TimeToLiveDescription;
}
