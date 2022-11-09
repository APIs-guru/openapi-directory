import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeToLiveSpecification } from "./timetolivespecification";


export class UpdateTimeToLiveOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TimeToLiveSpecification" })
  timeToLiveSpecification?: TimeToLiveSpecification;
}
