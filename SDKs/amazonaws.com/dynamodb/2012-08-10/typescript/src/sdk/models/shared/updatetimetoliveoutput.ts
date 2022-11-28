import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeToLiveSpecification } from "./timetolivespecification";



export class UpdateTimeToLiveOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TimeToLiveSpecification" })
  timeToLiveSpecification?: TimeToLiveSpecification;
}
